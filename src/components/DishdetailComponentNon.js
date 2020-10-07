import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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