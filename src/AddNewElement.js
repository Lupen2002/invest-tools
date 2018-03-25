import React, {Component} from 'react';
import select from './select.css';

class AddNewElement extends Component {
  constructor(props){
    super(props)
    this.state={
      arr:[],
    }
  }

  showValues=()=>{
      var selectBox = document.getElementById("selectBox");
      var selectedValue = selectBox.options[selectBox.selectedIndex].value;
      let elem = this.state.arr[selectBox.selectedIndex];
      this.props.getValues(elem[0],elem[1])
  }

  _add=()=>{
      let name = this.props.name;
      if (name !== undefined && name !== "") {
      let selectBox = document.getElementById("selectBox");
      let lastName = this.props.lastName;
      this.state.arr.push([name,lastName])
      var option = document.createElement("option");
      option.text = name;
      selectBox.add(option);
    }
  }

  render() {
    return (
      <div>
      <button onClick={this._add}>Add new</button>
      <select id="selectBox" onChange={this.showValues} multiple>
      </select>
      </div>
    )
  }
}

export default AddNewElement;
