import React from 'react';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import './TopBar.css';
import ProgressBar from './ProgressBar';

const TopBar = () => {
    return (
        <div className="top-bar">
            <ProfileIcon />
            <ProgressBar />
        </div>
    )
}

export default TopBar;