import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

import "./Header.css";
function Header() {
    return (
        <div className="header">
            
            <IconButton >
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img className="header__logo" src="https://dev.mp2it.in/demo2/tinder-logo.png" />

            <IconButton >
            <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header
