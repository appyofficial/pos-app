import React, { Component } from 'react';
import './Checkout.css';

export default class Checkout extends Component {
    handleGoBack = () => {
        this.props.goBack();
    }

    totalBill = () => {
        let cost = this.props.checkoutItems.reduce((a, b) => a + b.price, 0);
        return cost;
    }

    render() {
        return (
            <div className='checkout' style={{ display: this.props.cartActive ? 'block' : 'none' }}>
                <div className='checkout-container'>
                    <h2>Your Order</h2>
                    <div className='checkout-items'>
                        {this.props.checkoutItems.map(item => (
                            <div className='checkout-item-card'>
                                <h3>{item.name}</h3>
                                <p>{item.price} SEK</p>
                            </div>
                        ))}
                        <div className='checkout-bill'><span>Total:</span> <span>{this.totalBill()} SEK</span></div>
                    </div>
                    <div className='checkout-btns-container'>
                        <button className='gobackBtn' onClick={this.handleGoBack}>Go Back</button>
                        <button className='confirmAndPayBtn'>Confirm & Pay</button>
                    </div>
                </div>
            </div>
        );
    }
}