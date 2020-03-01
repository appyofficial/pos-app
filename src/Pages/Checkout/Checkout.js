import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Checkout extends Component {
    render() {
        return (
            <div className='checkout'>
                <div >
                    <div className='checkout-items'>

                    </div>

                    <div className='checkout-btns-container'>
                        <Link>Go Back</Link>
                        <button>Pay</button>
                    </div>
                </div>
            </div>
        );
    }
}