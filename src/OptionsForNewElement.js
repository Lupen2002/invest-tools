import React, { Component } from 'react';
import styles from './styles.css'

class OptionForNewElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:undefined,
      lastName:undefined,
    };
    this.id = undefined;
  }

  setState=(name,lastName)=>{
    this.setState({...this.state, name, lastName})
  }

  setParams=(event,id)=> {
    if(id==='Name') this.props.setValue(event.target.value,this.props.lastName)
    else if(id==='LastName') this.props.setValue(this.props.name,event.target.value)
  }

  saveChanges=()=>{
    let elementName = document.getElementById('name');
    let elementLastName = document.getElementById('lastName');
    this.props.setValue(elementName.value, elementLastName.value, this.id)
  }

  render() {
    //TODO look like shit and mb use method
    if(this.props.id !== undefined) this.id = this.props.id;
    let elementName = document.getElementById('name');
    let name = this.props.name;
    if(elementName !== null && name !== undefined) {elementName.value = name}

    let elementLastName = document.getElementById('lastName');
    let lastName = this.props.lastName;
    if(elementLastName !== null && lastName !== undefined) {elementLastName.value = lastName}

    return (
      <div className="labels">
        <label>Name: </label>
        <textarea id="name" onChange={e=>this.setParams(e,'Name')}></textarea>
        <p>
          <label>Last name: </label>
          <textarea id="lastName" onChange={e=>this.setParams(e,'LastName')}></textarea>
        </p>
        <button className="save_changes" onClick={this.saveChanges}>Save changes</button>
      </div>
    )
  }
}

export default OptionForNewElement;
