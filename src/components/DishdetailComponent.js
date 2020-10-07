import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishdetailComponent extends Component {

    renderComments(comments) {
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
                <div></div>
            );
        }
    }
}
export default DishdetailComponent;