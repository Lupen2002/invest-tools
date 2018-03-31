import React, {Component} from 'react';
import './App.css';
import SplitPane from 'react-split-pane';
import AddNewElement from './AddNewElement';
import OptionsForNewElement from './OptionsForNewElement';
import styles from './styles.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      name:undefined,
      lastName:undefined,
      id:undefined,
    }
  }

  setValue=(name,lastName,id)=>{
    this.setState({...this.state, name, lastName, id})
  }

  render() {
    return (
      <SplitPane split="horizontal" minSize={30}>
            <div className="text">INVEST-TOOLS</div>
          <SplitPane split="vertical" minSize={100}>
            <div><AddNewElement
                        name={this.state.name}
                        lastName={this.state.lastName}
                        id={this.state.id}
                        setValue={this.setValue}/></div>
            <div><OptionsForNewElement
                        name={this.state.name}
                        lastName={this.state.lastName}
                        id={this.state.id}
                        setValue={this.setValue}/></div>
          </SplitPane>
      </SplitPane>
    );
  }
}

export default App;
