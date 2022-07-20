import React, { useState } from 'react';

// styles
import './assets/styles.scss';

// components
import EventSignUpForm from './components/EventSignUpForm';
import EventSignUpList from './components/EventSignUpList';
import Header from './components/Header';

const App = () => {
  const [userSignedIn, setUserSignedIn] = useState(false);

  return (
    <>
      <Header
        isSignedIn={userSignedIn}
        handleSignInClick={() => setUserSignedIn(true)}
        handleSignOutClick={() => setUserSignedIn(false)}
      />
      <div className='section'>
        <div className='container'>
          <h1 className='title is-size-1'>Welcome to the event sign up app</h1>
          {
            userSignedIn && <EventSignUpList />
          }
          {
            !userSignedIn && <EventSignUpForm />
          }
        </div>
      </div>
    </>
  );
};

export default App;