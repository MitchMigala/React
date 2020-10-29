import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Modal, ModalHeader, ModalBody, Button, Form, Input,Label, Row, Col } from 'reactstrap';
import Main from './MainComponent' ;

//import CommentFormComponent from './CommentFormComponent' ;



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
                                <CommentFormComponent/>
                            </CardBody>
                        </Card>
                    </div>
                </div>
        </div>
    );
}


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentFormComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }

    handleSubmit(values){
        console.log("Current state is: " + JSON.stringify(values) )
        alert("Current state is: " + JSON.stringify(values))

    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen

        });
    }

    render(){
        return(
            <div>
                <Button onClick={this.toggleModal} className="bg-light text-dark">
                <span className="fa fa-pencil"> Submit Comment</span>
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                <Col><Label className="m3" htmlFor="rating"> Rating</Label></Col>
                                    <Col md={{size:12, offset:0}}>
                                        <Control.select model=".rating" name="rating"
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>

                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                   <Col><Label htmlFor="yourname">Your Name</Label></Col>
                                    <Col md={12}>
                                        <Control.text model=".yourname" id="yourname"
                                        className="form-control" 
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        placeholder="Your Name"
                                        name="yourname"/>
                                        <Errors className="text-danger"
                                            model=".yourname"
                                            messages={{
                                                required: "Required ",
                                                minLength: "Must be greater than 2 characters ",
                                                maxLength: "Must be less than 15 characters"
                                            }}/>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                   <Col> <Label htmlFor="comment">Comment</Label></Col>
                                    <Col md={12}>
                                        <Control.textarea model=".comment" id="comment" 
                                        className="form-control"
                                        rows="6"
                                        name="comment"/>
                                    </Col>
                                </Row>
                                <Button type='submit'color="primary">Submit</Button>
                            </LocalForm>

                        </ModalBody>
                    </Modal>
                </div>
        );
    }
}
export default DishDetailComponent ;
