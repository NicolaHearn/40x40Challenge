import React from 'react';
import PercentageComplete from '../Typography/PercentageComplete';
import './ProgressBar.css'

const ProgressBar = () => {
    return (
        <div className="container">
            <PercentageComplete />
            <div className="progress-bar">
            </div>  
        </div>  
        )
}

export default ProgressBar;