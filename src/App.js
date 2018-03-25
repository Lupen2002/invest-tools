import React, { Component } from 'react';
import './App.css';
import SplitPane from 'react-split-pane';
import AddNewElement from './AddNewElement';
import OptionsForNewElement from './OptionsForNewElement';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      name:undefined,
      lastName:undefined,
    }
  }

  setValue=(name,lastName)=>{
    if(name === undefined) this.setState({...this.state, lastName})
    if(lastName === undefined) this.setState({...this.state, name})
  }

  getValues=(name,lastName)=>{
    this.setState({...this.state, name, lastName})
    console.log(this.state)
  }

  render() {
    return (
      //// TODO: Костыль
      <SplitPane split="vertical" minSize={100}>
          <div><AddNewElement
              name={this.state.name}
              lastName={this.state.lastName}
              getValues={this.getValues}/></div>
          <SplitPane split="horizontal">
              <div>INVEST-TOOLS</div>
              <div><OptionsForNewElement setValue={this.setValue}/></div>
          </SplitPane>
      </SplitPane>
    );
  }
}

export default App;
