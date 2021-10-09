import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
import LoadComments from './LoadComments'
import CommentForm from './CommentForm'

const DishDetails = (props) => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle style={{ fontSize: "20px", fontWeight: "bold" }}>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p style={{ fontSize: "15px", fontWeight: "bold", color: "red" }}>{props.dish.price} BDT</p>
                        <hr />
                        <LoadComments comments={props.comments} />
                        <ht/>
                        <CommentForm dishId={props.dish.id} addComment={props.addComment}/>


                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetails;