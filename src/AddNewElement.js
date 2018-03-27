import React, {Component} from 'react';
import styles from './styles.css'

class AddNewElement extends Component {
  constructor(props){
    super(props)
    this.state={
      arr:[],
    }
  }

  showValues=(e)=>{
      var selectBox = e.target;
      var selectedValue = selectBox.options[selectBox.selectedIndex].value;
      let elem = this.state.arr[selectBox.selectedIndex];
      this.props.setValue(elem[0],elem[1])
  }

  _add=()=>{
    console.log(this.props);
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
      <button className='add_new' onClick={this._add}>Add new</button>
      <select className='my_select' id="selectBox" onChange={this.showValues} multiple>
      </select>
      </div>
    )
  }
}

export default AddNewElement;
