import React, { Component } from 'react';
import CheckList from './CheckList';
/*
export default class Card extends Component {
render() {
 return (
 <div className="card">
 <div className="card__title">{this.props.title}</div>
 <div className="card__details">
 {this.props.description}
 <CheckList cardId={this.props.id} tasks={this.props.tasks} />
 </div>
 </div>
 );
 }
}

*/

export default class Card extends Component {
    constructor() {
    super(...arguments);
    this.state = {
    showDetails: false,cosa:true}
    };
    

    toggleDetails(){
this.setState({showDetails:!this.state.showDetails});

        
    }

    render() {
        let cardDetails;
        if (this.state.showDetails) {
        cardDetails = (
        <div className="card__details">
        {this.props.description}
        <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
        );
        };
      
        /*return (
        <div className="card">
        <div className="card__title" onClick={
        ()=>this.setState({showDetails: !this.state.showDetails})
        }>{this.props.title}</div>
        {cardDetails}
        </div>
        );*/

return(
<div className="card">
        <div className={this.state.cosa ? "card__title":"cosa"} onClick={this.toggleDetails.bind(this)}>
        {this.props.title}</div>
        {cardDetails}
        </div>



);

    }
}