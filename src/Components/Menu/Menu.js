import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';
import Cart from '../Cart/Cart';
import MenuHeader from './MenuHeader';
import ItemCard from '../ItemCard/ItemCard';
import './Menu.css';
import cafeLatte from './../../Data/images/caffelatte.png';
import chaiLatte from './../../Data/images/chailatte.png';
import machiatto from './../../Data/images/machiatto.png';
import espresso from './../../Data/images/espresso.png';
import blackCoffee from './../../Data/images/blackcoffee.png';
import emptyCart from './../../Data/images/emptycart.png';



const menu = [
    {
        "item_id": "001",
        "item_cat": "meal",
        "item_name": "Cafe Latte",
        "item_price": 49,
        "item_image": cafeLatte,
    },
    {
        "item_id": "002",
        "item_cat": "drinks",
        "item_name": "Chai Latte",
        "item_price": 39,
        "item_image": chaiLatte
    },
    {
        "item_id": "003",
        "item_cat": "drinks",
        "item_name": "Macchiato",
        "item_price": 55,
        "item_image": machiatto
    },
    {
        "item_id": "004",
        "item_cat": "drinks",
        "item_name": "Espresso",
        "item_price": 25,
        "item_image": espresso
    },
    {
        "item_id": "005",
        "item_cat": "drinks",
        "item_name": "Black Coffee",
        "item_price": 39,
        "item_image": blackCoffee
    }
];



class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: menu,
            itemsInCart: []
        }
    }

    //adding item to cart
    addToCart = (name, price, image, id) => {
        this.setState(st => ({ itemsInCart: [...st.itemsInCart, { name: name, price: price, image: image, id: uuid() }] }))
    }

    //remove Item
    removeItem = (id) => {
        let updated = [...this.state.itemsInCart];
        let result = updated.filter(item => item.id !== id);
        this.setState({ itemsInCart: result });
    }

    //total price
    totalPrice = () => {
        let totalPrice = this.state.itemsInCart.reduce((a, b) => a + b.price, 0);
        return totalPrice;

    }

    //cancel order
    cancelOrder = () => {
        this.setState({ itemsInCart: [] });
    }

    //checkout
    checkOut = () => {
        return (
            <div className='checkout'>
                {this.totalPrice()}
            </div>
        )
    }

    //filter food
    filterFood = (category) => {


        let displayMenu = this.state.menu.map(item => <ItemCard id={item.item_id} itemName={item.item_name} itemPrice={item.item_price} img={item.item_image} addToCart={this.addToCart} />);
        return displayMenu;

    }


    render() {

        let displayCart = this.state.itemsInCart.map(item => <Cart name={item.name} price={item.price} image={item.image} id={item.id} removeItem={this.removeItem} />);



        return (
            <div className='Control'>
                <div className='menu-ct'>
                    <MenuHeader filterFood={this.filterFood} />
                    <div className='Menu'>
                        {this.filterFood()}
                    </div>
                </div>
                <div className='cart-box'>
                    <div className='cart-box-header'><p>Cart <span>{this.state.itemsInCart.length}</span></p> </div>
                    <div className='cart-box-items'>
                        {
                            this.state.itemsInCart.length === 0 ?
                                <div className='empty-cart'>
                                    <img src={emptyCart} alt='empty cart' />
                                    <h4>Your cart is empty</h4>
                                    <p>Please add some item</p>
                                </div> :
                                displayCart
                        }
                    </div>
                    <div className='cart-box-total'>
                        <div className='cart-box-total-amount'>
                            <span>Total</span><span> {this.totalPrice()} SEK</span>
                        </div>
                        <div className='cart-box-pay'>
                            <Link to='/checkout' className='checkout-btn' onClick={this.checkOut}>Checkout</Link>
                            <Link to='/' className='cancel-btn' onClick={this.cancelOrder}>Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;