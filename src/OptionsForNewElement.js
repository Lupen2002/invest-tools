import React, { Component } from 'react';
import styles from './styles.css'

class OptionForNewElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:undefined,
      lastName:undefined,
    };
  }

  setState=(name,lastName)=>{
    console.log(this.state)
    this.setState({...this.state, name, lastName})
    console.log(this.state)
  }

  setParams=(event,id)=> {
    if(id==='Name') this.props.setValue(event.target.value,undefined)
    else if(id==='LastName') this.props.setValue(undefined,event.target.value)
  }

  render() {
    //TODO look like shit and mb use method
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
      </div>
    )
  }
}

export default OptionForNewElement;
