import React, { Component } from 'react';

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
    return (
      <div>
        <label>Name: </label>
        <textarea onChange={e=>this.setParams(e,'Name')}>{this.state.name}</textarea>
        <p>
          <label>Last name: </label>
          <textarea onChange={e=>this.setParams(e,'LastName')}>{this.state.lastName}</textarea>
        </p>
      </div>
    )
  }
}

export default OptionForNewElement;
