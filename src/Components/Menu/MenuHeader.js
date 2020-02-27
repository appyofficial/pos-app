import React from 'react';
import allicon from './../../Data/icons/all.png';
import burgerIcon from './../../Data/icons/burger.png';
import drinksIcon from './../../Data/icons/drinks.png';
import mealIcon from './../../Data/icons/meal.png';
import pizzaIcon from './../../Data/icons/pizza.png';

export default class MenuHeader extends React.Component {
    handleClick = (e) => {
        let cat = e.target.getAttribute('data-catname') || e.target.parentElement.getAttribute('data-catname');
        this.props.filterFood(cat);
    }

    render() {
        return (
            <div className='menu-header'>
                <p>Food Menu</p>
                <div className='menu-header-nav'>
                    <button className='filterBtn' onClick={this.handleClick} data-catname='all'>
                        <img src={allicon} alt='all' />
                        <span>All</span>
                    </button>
                    <button className='filterBtn' onClick={this.handleClick} data-catname='burger'>
                        <img src={burgerIcon} alt='burgers' />
                        <span>Burgers</span>
                    </button>
                    <button className='filterBtn' onClick={this.handleClick} data-catname='pizza'>
                        <img src={pizzaIcon} alt='pizza' />
                        <span>Pizza</span>
                    </button>
                    <button className='filterBtn' onClick={this.handleClick} data-catname='meal'>
                        <img src={mealIcon} alt='meals' />
                        <span>Meals</span>
                    </button>
                    <button className='filterBtn' onClick={this.handleClick} data-catname='drink'>
                        <img src={drinksIcon} alt='drinks' />
                        <span>Drinks</span>
                    </button>
                </div>
            </div>
        );
    }
}