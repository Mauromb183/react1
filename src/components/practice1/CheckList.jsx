import React, { Component } from 'react';

export default class CheckList extends Component {
 render() {
 let tasks = this.props.tasks.map((task) => (
 <li className="checklist__task">
 <input type="checkbox" defaultChecked={task.done} />
 {task.name}
 <a href="#" className="checklist__task--remove" />
 </li>
 ));

 return (
 <div className="checklist">
 <ul>{tasks}</ul>
 </div>
 );
 }
}

