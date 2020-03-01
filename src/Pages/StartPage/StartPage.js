import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './StartPage.css';
import orderHereImg from '../../Data/images/order-here.png';

export default class StartPage extends Component {
    render() {
        return (
            <div className="startpage">
                <div className="startpage-container">
                    <div className="startpage-img">
                        <img src={orderHereImg} alt='Order here' />
                    </div>
                    <div className="startpage-content">
                        <h1>Order Food</h1>
                        <div className='startpage-btns'>
                            <Link className='startBtn' to='/home'>Eat here</Link>
                            <Link className='startBtn' to='/home'>Take away</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}