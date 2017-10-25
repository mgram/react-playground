import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {withRouter,Switch, Route} from 'react-router-dom';

class CardRouter extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Card} />
        <Route path='/s' component={Card} />
        <Route path='/b' component={BigCard} />
      </Switch>
    )
  }
}

class Card extends Component{
  constructor(props){
    super(props)
  }
  handleClick(){
    this.props.history.push('/b')
  }
  render(){
    return(
      <div className="container">
      <input type="button" value="Card" className="card" onClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}

class BigCard extends Component{
  handleBigClick(){
    this.props.history.push('/s')
  }
  render(){
    return(
      <div className="container">
      <input type="button" value="Big Card" className="bigcard" onClick={this.handleBigClick.bind(this)}/>
      </div>
    )
  }
}

export default withRouter(CardRouter);
