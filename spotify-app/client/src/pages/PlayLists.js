import { useState, useEffect } from "react";
import axios from 'axios';
import { catchErrors } from "../utils";
import { getCurrentUserPlaylists } from "../spotify";
import { SectionWrapper, PlayListGrid } from '../components';

const PlayLists = () => {
    // a playlist object
    const [playlistsData, setPlaylistsData] = useState(null); 
    // the playlist array
    const [playlists, setPlaylists] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const userPlaylists = await getCurrentUserPlaylists();
            setPlaylistsData(userPlaylists.data);
        };

        
        catchErrors(fetchData());
    }, []);

    // when playlistData updates, check if there are more playlists to fetch
    // thenupdate the state variable
    useEffect(() => {
        if (!playlistsData) {
            return;
        }

        // playlist endpoint only returns 20 playlists at a time, so we need to
        // make sure we get all playlists by fetching the next set of playlists
        const fetchMoreData = async () => {
            if (playlistsData.next) {
                const { data } = await axios.get(playlistsData.next);
                setPlaylistsData(data);
            }
        };

        // use functional update to update playlists state variable
        // to avoid including playlists as a dependency for this hook
        // and creating an infinite loop
        setPlaylists(playlist => ([
            ...playlists ? playlists : [],
            ...playlistsData.items
        ]));

        // fetch next set of playlists as needed
        catchErrors(fetchMoreData());
    }, [playlistsData]);

    return (
        <main>
            <SectionWrapper title="Playlists" breadcrumb="true">
                {playlists && (
                    <PlayListGrid playlists={playlists} />
                )}
            </SectionWrapper>
        </main>
        
    )
};


export default PlayLists;