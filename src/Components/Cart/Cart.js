import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
    handleClick = () => {
        this.props.removeItem(this.props.id);
    }

    render() {
        return (
            <div className='Cart' key={this.props.id}>
                <div className='cart-img'>
                    <img src={this.props.image} alt={this.props.name} />
                </div>
                <div className='cart-detail'>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.price} SEK</p>
                </div>
                <button className='cart-removeBtn' onClick={this.handleClick}>X</button>
            </div>
        );
    }
}

export default Cart;