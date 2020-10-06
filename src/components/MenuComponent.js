import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';
 
class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedDish: null 
        };
        console.log("menu components constructor is invoked.");
    }
    componentDidMount(){
        console.log("menu componentDidMount is invoked.");
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    renderDish(dish){
        if (dish != null){
            return(
                <DishDetail dish={this.state.selectedDish}/>

            );

        }
        else{
            return(
                <div></div>
            );
        }

    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" object="true" src={dish.image} alt={dish.name}/>
                    
                        <CardImgOverlay>
                            <CardTitle heading="true">{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>

                </div>
            );

        });

        console.log("menu components render is invoked.");
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                
                {this.renderDish(this.state.selectedDish)}
            
            </div>

        );
    }
}

export default Menu;