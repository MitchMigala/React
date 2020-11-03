import React from 'react';
import {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect} from 'react-redux' ;
import { addComment, fetchDishes } from '../redux/ActionCreators';


const mapStateToProps = state  => {
    return{
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())}
})


class Main extends Component {


  componentDidMount(){
    this.props.fetchDishes();
  }

render(){
  
  const HomePage = () => {
    return(
      <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
      />
    );
  }

  const DishWithId = ({match}) => {
    console.log(parseInt(match.params.dishId,10));
    return(
<DishDetailComponent dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment}
             />
    );

  }

  return (
    <div>
      <Header />
      <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
      </Switch>
      <Footer />


    </div>
  );

};

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));