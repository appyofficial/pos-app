import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './StartPage.css';
import eatHere from '../../Data/icons/eathere.png';
import takeAway from '../../Data/icons/takeawa.png';
import homeImage from '../../Data/images/home-image.jpg';

export default class StartPage extends Component {
    render() {
        return (
            <div className="startpage">
                <div className="startpage-container">
                    <span className='madeBy'>Made by <a href='https://www.appysharma.com'>Appy Sharma</a></span>
                    <div className="startpage-content">
                        <h1>Order Food</h1>
                        <p>Fresh food right outta kitchen.<br /> Choose from many different food and drinks.</p>
                        <div className='startpage-btns'>
                            <Link className='startBtn' to='/home'>
                                <img src={eatHere} alt='' />Eat here</Link>
                            <Link className='startBtn' to='/home'>
                                <img src={takeAway} alt='' />Take away</Link>
                        </div>
                    </div>
                </div>
                <div className='startup-image' style={{ backgroundImage: `url(${homeImage})` }}>
                </div>
            </div>
        );
    }
}