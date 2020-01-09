import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component {
    render() {
        return  (
            <header>
                <div>
                    <div className="row">
                        <div className="col-md-2">
                            <a className="header-logo">
                                <img src={logo} alt=""/>
                            </a>
                            <a className="font-kabarkabar">Movie</a>
                        </div>
                        <div className="col-md-2">
                            <div>
                                <div className="navbar">
                                    <a href="#" className="header-margin-list">Home</a>
                                    <a href="#" className="header-margin-list">Profile</a>
                                    <a href="#" className="header-margin-list">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
         );
    }
}

export default Header;