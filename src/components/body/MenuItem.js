import { size } from 'lodash';
import React from 'react'
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap'

const MenuItem = props =>{
    console.log(props);
    return(
        <div>
            <Card style={{margin:"10px auto"}}>
                <CardBody >
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image} style={{opacity:"0.7"}}/>
                    <CardImgOverlay>
                        <CardTitle style={{textAlign:"center", fontSize:"30px", fontWeight:"bold",margin:"auto"}}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>

            </Card>
            
        </div>
    )
}

export default MenuItem;