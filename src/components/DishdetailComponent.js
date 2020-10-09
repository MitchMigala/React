import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


 function DishdetailComponent({dish}) {

    return(
        <div className="col-12 col-md-5 m-1">
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    </div>

    );

 }

   function renderComments(comments) {
        console.log("dish detail component renderComments method is invoked");
        if (comments != null) {
            const comm = comments.map(comment => {
                return (
                    <li className="list-group-item border-0" key={comment.id} >
                        <span>{comment.comment} <br />
                        --{comment.author},
                        
                        {new Intl.DateTimeFormat('en-US', 
                        {year: 'numeric',month: 'short',day: '2-digit'}).format(new Date(comment.date))}
                        </span>
                    </li>
                );
            })
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments:</h4>
                    <ul className="list-unstyled">
                        {comm}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div className="dishdetail renderComments method empty comment check"></div>
            );
        }
    }

 
const detailComp = (props) => {
    const dish = props.dish;
    if (dish != null) {
        const dishDisplay = <DishdetailComponent dish={dish}  />
        const commentDisplay = renderComments(dish.comments);
        return (
            <div className="container">
                <div className="row">
                    {dishDisplay}
                    {commentDisplay}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="dishdetail render method empty dish check"></div>
        );
    }

}





export default detailComp;




/*
backup copy of code

import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


 function DishdetailComponent(dish) {

    return(
        <div className="col-12 col-md-5 m-1">
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    </div>

    );

 }


   function renderComments(comments) {
        console.log("dish detail component renderComments method is invoked");
        if (comments != null) {
            const comm = comments.map(comment => {
                return (
                    <li className="list-group-item border-0" key={comment.id} >
                        <span>{comment.comment} <br />
                        --{comment.author},
                        
                        {new Intl.DateTimeFormat('en-US', 
                        {year: 'numeric',month: 'short',day: '2-digit'}).format(new Date(comment.date))}
                        </span>
                    </li>
                );
            })
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments:</h4>
                    <ul className="list-unstyled">
                        {comm}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div className="dishdetail renderComments method empty comment check"></div>
            );
        }
    }


 
const detailComp = (props) => {
    const dish = this.props.dish;
    if (dish != null) {
        const dishDisplay = <DishdetailComponent dish={props.dish}></DishdetailComponent>
        const commentDisplay = renderComments(dish.comments);
        return (
            <div className="container">
                <div className="row">
                    {dishDisplay}
                    {commentDisplay}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="dishdetail render method empty dish check"></div>
        );
    }



}


        



export default detailComp;
*/