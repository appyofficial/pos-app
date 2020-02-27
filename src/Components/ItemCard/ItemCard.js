import React, { Component } from 'react';
import './ItemCard.css';

class ItemCard extends Component {
    handleClick = () => {
        this.props.addToCart(this.props.itemName, this.props.itemPrice, this.props.img, this.props.id);
    }
    render() {
        return (
            <div className='ItemCard' onClick={this.handleClick}>
                <div className='img-ct'>
                    <img src={this.props.img} alt={this.props.itemName} />
                </div>
                <div>
                    <h3>{this.props.itemName}</h3>
                    <p>{this.props.itemPrice} SEK</p>
                </div>
            </div>
        );
    }
}

export default ItemCard;