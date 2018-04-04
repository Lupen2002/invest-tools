import React, {Component} from 'react';
import App from "./App";
import SplitPane from 'react-split-pane';
import Const, {newSchema} from './defaultFields/Const'
import Form from "react-jsonschema-form";

class SettingsForStandards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainForm: false,
            dataForm: [],
        };
    }

    back() {
        this.setState({...this.state, mainForm: true})
    }

    //Тут я думал заполнять массив названиями новых properties
    onSubmit(e) {
        let value = e.formData["newValue"];
        let dataForm = this.state.dataForm;
        dataForm.push(value);
        this.setState({...this.state, dataForm});
        console.log(e.formData)
    }

    secondForm = <span></span>;

    render() {
        //А тут превращать в объект и схему, а после сетить в Form
        let form = <span/>;
        if (this.state.mainForm) form = <App/>;
        if (this.state.dataForm.length > 0) {
            let formData = this.state.dataForm;
            let o = new Object();
            let obj = formData.map((el) => {
                o["newValue"] = el
            });
            console.log(o)
            let newFrom = <Form schema={newSchema}/>
            this.secondForm = newFrom //после этой строки перестает работать
        }
        else form = (
            <SplitPane split="horizontal" minSize={40}>
                <div className="text">INVEST-TOOLS
                    <button className="btn_settingStandards"
                            onClick={this.back.bind(this)}>Main form
                    </button>
                </div>
                <SplitPane split="vertical" minSize={350}>
                    <div>
                        <select>
                            {this.props.standards.map(s => <option>{s}</option>)}
                        </select>
                    </div>
                    <div>
                        {this.secondForm}
                        <Form schema={newSchema} onSubmit={this.onSubmit.bind(this)}/>
                    </div>
                </SplitPane>
            </SplitPane>
        );
        return (form)
    }
}

export default SettingsForStandards;
