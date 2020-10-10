import React from 'react';
import {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dishId){
    this.setState({selectedDish: dishId});
}

render(){
  console.log("Main component render method is invoked");

  return (
    <div>
      <Header />
      <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      <Footer />


    </div>
  );

};

};

export default Main;
