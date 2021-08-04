import React from 'react'
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText} from 'reactstrap'

const DishDetails = (props)=>{
    return(
        <div>
            <Card style={{marginTop:"10px"}}>
                <CardImg top src={props.dish.image} alt={props.dish.name}/>
                <CardBody style={{textAlign:"left"}}>
                    <CardTitle style={{fontSize:"20px", fontWeight:"bold"}}>{props.dish.name}</CardTitle>
                    <CardText>
                     <p>{props.dish.description}</p>
                     <p style={{fontSize:"15px", fontWeight:"bold",color:"red"}}>{props.dish.price} BDT</p>

                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetails;