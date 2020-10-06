import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';
import Menu from './MenuComponent';



class DishDetail extends Component {


    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render(){
           const dish = this.props.dish;
           const comm = this.props.dish.comments.map((comments) => {
            return(    
                <div key={comments.id} className="col-12 border-0 m-0">
                    <li className="list-group-item border-0 m-1 p-1">{comments.comment}</li>
                    <li className="list-group-item border-0 m-1 p-1">--{comments.author}, {comments.date}</li>

                </div>
            );

           });

            return(
            <div className="row">
                <div  className="col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" object="true" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle heading="true">{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
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