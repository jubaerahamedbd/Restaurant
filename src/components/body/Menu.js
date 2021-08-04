import React, { Component } from 'react'
import DISHES from '../data/dishes'
import MenuItem from './MenuItem'
import DishDetails from './DishDetails'

class Menu extends Component {
    state = {
        dishes: DISHES,
        SelectedDish: null
    }
    onDishSelect = dish => {
        this.setState({ SelectedDish: dish })
    }
    render() {
        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id}
                    onDishSelect={() => this.onDishSelect(item)}
                />
            );
        })
        let DishDetail = null;
        if (this.state.SelectedDish != null) {
            DishDetail = < DishDetails dish={this.state.SelectedDish} />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {menu}
                    </div>
                    <div className="col-md-6">
                        {DishDetail}
                    </div>
                </div>
            </div>
        )
    }

}

export default Menu;