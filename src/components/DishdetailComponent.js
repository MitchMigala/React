import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';
import Main from './MainComponent' ;


function DishDetailComponent({dish, comments}) {

    const comms = comments.map(comment => {
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

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb >
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr />
                </div> 
            </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardBody>
                                <CardText>{comms}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
        </div>
    );
}

export default DishDetailComponent ;
