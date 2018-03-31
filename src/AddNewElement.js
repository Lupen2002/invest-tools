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
      this.props.setValue(elem[0],elem[1],selectBox.selectedIndex)
  }

  _add=()=>{
      let name = this.props.name;
      if (name !== undefined && name !== "") {
      let lastName = this.props.lastName;
      let arr = this.state.arr
      arr[arr.length] = [name,lastName]
      this.setState({...this.state,arr})
    }
  }

  render() {
    if(this.props.id !== undefined && this.props.id !== null){
    this.state.arr[this.props.id] = [this.props.name,this.props.lastName]
    }
    return (
      <div>
      <button className='add_new' onClick={this._add.bind(this)}>Add new</button>
      <select className='my_select' id="selectBox" onChange={this.showValues} multiple>
      {this.state.arr.map(el => <option>{el[0]}</option>)}
      </select>
      </div>
    )
  }
}

export default AddNewElement;
