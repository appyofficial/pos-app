import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
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
        "item_cat": "drink",
        "item_name": "Chai Latte",
        "item_price": 39,
        "item_image": chaiLatte
    },
    {
        "item_id": "003",
        "item_cat": "drink",
        "item_name": "Macchiato",
        "item_price": 55,
        "item_image": machiatto
    },
    {
        "item_id": "004",
        "item_cat": "drink",
        "item_name": "Espresso",
        "item_price": 25,
        "item_image": espresso
    },
    {
        "item_id": "005",
        "item_cat": "burger",
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
            itemsInCart: [],
            checkoutItems: [],
            cartActive: false
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

    //ask to cancel
    askToCancel = () => {
        let cancelConfirm = document.querySelector('.cancel-confirm');
        cancelConfirm.style.display = 'flex';
    }

    //cancel order
    cancelOrder = () => {
        this.setState({ itemsInCart: [] });
    }

    //do not cancel order
    doNotCancelOrder = () => {
        let cancelConfirm = document.querySelector('.cancel-confirm');
        cancelConfirm.style.display = 'none';
    }

    //checkout
    checkOut = () => {
        this.setState({ checkoutItems: [...this.state.itemsInCart] });
        this.setState({ cartActive: true });
    }

    //display menu item food
    displayMenuItems = () => {
        let displayMenuItems = this.state.menu.map(item => <ItemCard id={item.item_id} itemName={item.item_name} itemPrice={item.item_price} img={item.item_image} addToCart={this.addToCart} />);
        return displayMenuItems;

    }

    //filter food
    filterFood = (cat) => {
        console.log(cat);
    }

    //go back
    goBack = () => {
        this.setState({ cartActive: false });
    }

    render() {

        let displayCart = this.state.itemsInCart.map(item => <Cart name={item.name} price={item.price} image={item.image} id={item.id} removeItem={this.removeItem} />);



        return (
            <React.Fragment>
                <div className='cancel-confirm'>
                    <div className='cc-container scale-up-center'>
                        <h2>Are you sure you want to cancel your order?</h2>
                        <div className='cc-btns'>
                            <Link to='/' className='btn cancel-btn flx-center'><span role='img' aria-label='sad emoji' onClick={this.cancelOrder}>😔</span> Yes</Link>
                            <button className='btn checkout-btn flx-center' onClick={this.doNotCancelOrder}>
                                <span role='img' aria-label='hug emoji'
                                >🤗</span> No</button>
                        </div>
                    </div>
                </div>
                <Checkout
                    cartActive={this.state.cartActive}
                    checkoutItems={this.state.checkoutItems}
                    goBack={this.goBack}
                />
                <div className='Control'>
                    <div className='menu-ct'>
                        <MenuHeader filterFood={this.filterFood} />
                        <div className='Menu'>
                            {this.displayMenuItems()}
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
                                <button to='/checkout' className='checkout-btn' onClick={this.checkOut} disabled={this.state.itemsInCart.length > 0 ? false : true}>Checkout</button>
                                <button className='cancel-btn' onClick={this.askToCancel}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Menu;