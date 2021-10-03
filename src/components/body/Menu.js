import React, { Component } from 'react'
import DISHES from '../data/dishes'
import MenuItem from './MenuItem'
import DishDetails from './DishDetails'
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

class Menu extends Component {
    state = {
        dishes: DISHES,
        SelectedDish: null,
        modalOpen:false
    }
    onDishSelect = dish => { 
        this.setState({ 
            SelectedDish: dish,
            modalOpen: !this.state.modalOpen
         })
    }
    toggleModal = ()=>{
        this.setState({
            modalOpen: !this.state.modalOpen
        })
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
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {DishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }

}

export default Menu;