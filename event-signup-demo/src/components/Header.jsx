import React from "react";

const Header = ({ isSignedIn, handleSignInClick, handleSignOutClick}) => (
    <nav className="navbar is-warning" role="navigation" aria-label='main navigation'>
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item">
                    Home
                </a>
            </div>

            <div className="navbar-end">
                {
                    isSignedIn && (
                        <div className="navbar-item">
                            Welcome user, you are logged
                        </div>
                    )
                }
                <div className="navbar-item">
                    <div className="buttons">
                        {
                            !isSignedIn ? (
                                <a className="button is-primary" onClick={handleSignInClick}>
                                    <strong>Sign in</strong>
                                </a>
                            )
                            : (
                                <a className="button is-primary" onClick={handleSignOutClick}>
                                    <strong>Sign out</strong>
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </nav>
);

export default Header;