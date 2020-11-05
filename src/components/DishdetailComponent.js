import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Modal, ModalHeader, ModalBody, Button,Label, Row, Col } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl} from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger} from 'react-animation-components';



//import CommentFormComponent from './CommentFormComponent' ;


function RenderComments({comments}) {
 
    if(comments !== null || undefined) 
        return(
            <ul>
                <Stagger in>
                    {comments.map(comment => {
                        return (
                            <Fade in>
                                <li className="list-group-item border-0" key={comment.id} >
                                    <span>{comment.comment} <br />
                                    --{comment.author},
                                    
                                    {new Intl.DateTimeFormat('en-US', 
                                    {year: 'numeric',month: 'short',day: '2-digit'}).format(new Date(comment.date))}
                                    </span>
                                </li>
                            </Fade>
                        );
                        
                    })}
                </Stagger>
            </ul>
        )
    
}

function DishDetailComponent({dish, comments, postComment, isLoading, errMess}) {

    //alert("dishDetailComp.. dish contains  " + dish.id + " comments  " + comments + " addcomment   " + addComment);

    if (isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
            
        );
    }
    else if(errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{errMess}</h4>
                </div>
            </div>
            
        );
    }

    else if(dish != null)
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
                        <FadeTransform in 
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(-50%)'
                            }}
                            >
                            <Card>
                                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </FadeTransform>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <FadeTransform in 
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(-50%)'
                            }}
                            >
                            <Card>
                                <CardBody>
                                    <CardText>
                                        <RenderComments dish={dish} postComment={postComment} comments={comments} />
                                        <CommentFormComponent postComment={postComment} dishId={dish.id}/>
                                    </CardText>
                                    
                                </CardBody>
                            </Card>
                        </FadeTransform>
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
        
        this.props.postComment(this.props.dishId, values.rating, values.yourname, values.comment);

        this.toggleModal();

    
        
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
                                    <Col><Label className="m3" htmlFor="yourname"> Your Name</Label></Col>
                                    <Col md={{size:12, offset:0}}>
                                        <Control.text model=".yourname" name="yourname"
                                            className="form-control"
                                            id="yourname"
                                            placeholder="Your name"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                            />
                                        <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be 3 characters or more ',
                                            maxLength: 'Must be 15 characters or less',

                                        }}
                                     />
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
