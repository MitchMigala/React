import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Main from './MainComponent' ;

class DishdetailComponent extends Component {

    renderComments(comments) {
        if (comments != null) {
            const cmts = comments.map(comment => {
                return (
                    <li key={comment.id} >
                        <p>{comment.comment}</p>
                        <p>--{comment.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                        </p>
                    </li>
                );
            })
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {cmts}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
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
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.dish;
        if (dish != null) {
            const dishDisplay = this.renderDish(dish);
            const commentDisplay = this.renderComments(dish.comments);
            return (
                <div className="row">
                    {dishDisplay}
                    {commentDisplay}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}
export default DishdetailComponent;




/*
import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';




class DishDetail extends Component {


    render(){
        const dish = this.props.dish ;
        
           
           const comm = this.props.dish.comments.map((Komm) => {


            if (Komm.comment != null){

                return(    
                    <div key={Komm.id} className="col-12 border-0 m-0">
                        <li className="list-group-item border-0 m-1 p-1">
                            
                            <span>{Komm.comment}<br />
                            
                            --{Komm.author}, { new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(Komm.date)))}
                            </span>
                            </li>

                    </div>
                
                );

            }else{
                return(
                    <div></div>
                );
            }
        });

            return(
            <div className="row">
                <div  className="col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" object="true" src={this.props.dish.image} alt={this.props.dish.name}/>
                        <CardBody>
                            <CardTitle heading="true">{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-md-5 m-1">
                <h4>Comments:</h4>
                    <ul className="list-group list-group-flush">
                    {comm}
                    </ul>
                    
                </div>
            </div>
                
            );
   
        }

}

export default DishDetail;
*/