import axios from "axios";

// map for localstorage keys
const LOCALSTORAGE_KEYS = {
    accessToken: "spotify_access_token",
    refreshToken: "spotify_refresh_token",
    expireTime: "spotify_token_expire_time",
    timestamp: "spotify_token_timestamp",
}

// map to retrieve localstorage values
const LOCALSTORAGE_VALUES = {
    accessToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
    refreshToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.refreshToken),
    expireTime: window.localStorage.getItem(LOCALSTORAGE_KEYS.expireTime),
    timestamp: window.localStorage.getItem(LOCALSTORAGE_KEYS.timestamp),
};
console.log("win locstor exptime", window.localStorage.getItem(LOCALSTORAGE_KEYS.expireTime));
/*
* clear out all localstorage items we've set an d relaoad the page
* @returns {void}
*/
export const logout = () => {
    // Clear all localStorage items
    for (const property in LOCALSTORAGE_KEYS) {
      window.localStorage.removeItem(LOCALSTORAGE_KEYS[property]);
    }
    // Navigate to homepage
    window.location = window.location.origin;
  };


/*
* checks if the amount of time that has elapsed between the timestamp in localstorage
* and now is greater than the expiration time of 3600 s
* @returns {boolean} Whether or not the access token in localstorage has expired
*/
const hasTokenExpired = () => {
    const { accessToken, timestamp, expireTime } = LOCALSTORAGE_VALUES;
    if (!accessToken || !timestamp) {
        return false;
    }
    const millisecondsElapsed = Date.now() - Number(timestamp);
    return (millisecondsElapsed / 1000) > Number(expireTime);
};

/*
* refreshtoken
*
*/
const refreshToken = async () => {
    try {
        // logout if there's no refresh token stored or we've managed to get into a reload infinite loop
        if (!LOCALSTORAGE_VALUES.refreshToken || LOCALSTORAGE_VALUES.refreshToken === 'undefined' || (Date.now() - Number(LOCALSTORAGE_VALUES.timestamp) / 1000) < 1000) {
            console.error('No refresh token available');
            logout();
        }

        // use `/refresh_token` endpoint from our Node app
        const { data } = await axios.get(`/refresh_token?refresh_token=${LOCALSTORAGE_VALUES.refreshToken}`);

        // update localstorage values
        window.localStorage.setItem(LOCALSTORAGE_KEYS.accessToken, data.access_token);
        window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());

        // reload the page for localstorage updates to be reflected
        window.location.reload();

    } catch (e) {
        console.error(e);
    }
};

/*
* Handles logic for retrieving the Spotify access token from localstorage
* or URL query params
* @returns {string} A Spotify access token
*/
const getAccessToken = () => {
    const queryString = window.location.search;
    console.log("querystring", window.location.search)
    const urlParams = new URLSearchParams(queryString);
    console.log("urlparams", urlParams)
    const queryParams = {
        [LOCALSTORAGE_KEYS.accessToken]: urlParams.get('access_token'),
        [LOCALSTORAGE_KEYS.refreshToken]: urlParams.get('refresh_token'),
        [LOCALSTORAGE_KEYS.expireTime]: urlParams.get('expires_in'),
    };
    console.log("queryParams", queryParams);
    const hasError = urlParams.get('error');

    // if there's an error OR the token in localstorage has expired, refresh the token
    if(hasError || hasTokenExpired() || LOCALSTORAGE_VALUES.accessToken === 'undefined') { refreshToken();}

    // if there is a valid access token in localstorage, use that
    if (LOCALSTORAGE_VALUES.accessToken && LOCALSTORAGE_VALUES.accessToken !== 'undefined') {
        return LOCALSTORAGE_VALUES.accessToken;
    }

    // if there is a token in the url query params, user is logging in for the first time
    if (queryParams[LOCALSTORAGE_KEYS.accessToken]) {
        // store the query param in localstorage
        for (const property in queryParams) {
            window.localStorage.setItem(property, queryParams[property]
            );
        }
        // set timestamp
        window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());
        // return access token from query params
        return queryParams[LOCALSTORAGE_KEYS.accessToken];
    }

    // we should never get here
    return false;
};

export const accessToken = getAccessToken();

/*
* axios global request headers
* https://github.com/axios/axios#global-axios-defaults
*
*/
axios.defaults.baseURL = 'https://api.spotify.com/v1';
axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
axios.defaults.headers['Content-Type'] = 'application/json';

/*
* get current user's profile
* https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-current-user-profile
* @return {promise}
*/
export const getCurrentUserProfile = () => axios.get('/me');

/*
* get a list of current users playlists
* https://developer.spotify.com/documentation/web-api/ refere,ce/#endpoint-get-a-list-of-current-users-playlists
* @returns {promise}
*/
export const getCurrentUserPlaylists = (limit = 20) => {
  return axios.get(`/me/playlists?limit=${limit}`);
}

// get a users top artists
export const getTopArtists = (time_range = 'short_term') => {
    return axios.get(`me/top/artists?time_range=short_term`);
};

// get a users top track
export const getTopTracks = (time_range = 'short_term') => {
    return axios.get(`me/top/tracks?time_range=short_term`);
};

// get a playlist by id
export const getPlaylistById = playlist_id => {
    return axios.get(`/playlists/${playlist_id}`);
};

// get audio features for several tracks
export const getAudioFeaturesForTracks = ids => {
    return axios.get(`/audio-features?ids=${ids}`);
};