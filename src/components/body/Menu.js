import React, { Component } from 'react'
import MenuItem from './MenuItem'
import DishDetails from './DishDetails'
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux'
import * as actionTypes from '../../redux/actionTypes'

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch({
            type: actionTypes.ADD_COMMENT,
            payload: {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment
            }
        })
    }
}


class Menu extends Component {
    state = {
        SelectedDish: null,
        modalOpen: false
    }
    onDishSelect = dish => {
        this.setState({
            SelectedDish: dish,
            modalOpen: !this.state.modalOpen
        })
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        document.title = "Menu || Restaurant";
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id}
                    onDishSelect={() => this.onDishSelect(item)}
                />
            );
        })
        let DishDetail = null;
        if (this.state.SelectedDish != null) {
            const comments = this.props.comments.filter(comment => comment.dishId === this.state.SelectedDish.id)
            DishDetail = <DishDetails dish={this.state.SelectedDish}
                comments={comments}
                addComment={this.props.addComment}
            />

        }
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen}>
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

export default connect(mapStateToProps,mapDispatchToProps)(Menu);