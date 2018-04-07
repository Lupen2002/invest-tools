import React, {Component} from 'react';
import App from "./App";
import SplitPane from 'react-split-pane';
import {standards, newSchema} from './defaultFields/Const'
import {createIfrsProperties, getIfrsSchema, newIfrsSchema, ifrsPropsEmpty} from './defaultFields/storageForIFRS'
import {createRasProperties, getRasSchema, newRasSchema, rasPropsEmpty} from './defaultFields/storageForRAS'
import Form from "react-jsonschema-form";

class SettingsForStandards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainForm: false,
            dataForm: undefined,
            selectStandard: standards[0],
        };
    }

    back() {
        this.setState({...this.state, mainForm: true})
    }

    onSubmit(e) {
        let dataForm = e.formData["newValue"];
        this.setState({...this.state, dataForm});
    }

    secondForm = <span/>;
    newSchema = newSchema;

    onChange(e) {
        let selectStandard = standards[e.target.selectedIndex];
        this.setState({...this.state, selectStandard});
    }

    chooseStandard(standard) {
        if (standard === standards[0]) {
            this.secondForm = <Form schema={getIfrsSchema}/>;
            this.newSchema = newIfrsSchema
        }
        else if (standard === standards[1]) {
            this.secondForm = <Form schema={getRasSchema}/>;
            this.newSchema = newRasSchema
        }
    }

    render() {
        let form = <span/>;
        this.chooseStandard(this.state.selectStandard);
        if (this.state.dataForm !== undefined) {
            if (this.state.selectStandard === standards[0]) {
                createIfrsProperties(this.state.dataForm);
                this.secondForm = <Form schema={getIfrsSchema}/>;
            }
            else if (this.state.selectStandard === standards[1]) {
                createRasProperties(this.state.dataForm);
                this.secondForm = <Form schema={getRasSchema}/>;
            }
            this.state.dataForm = undefined
        }
        if (this.state.mainForm) form = <App/>;
        else form = (
            <SplitPane split="horizontal" minSize={40}>
                <div className="text">INVEST-TOOLS
                    <button className="btn_settingStandards"
                            onClick={this.back.bind(this)}>Main form
                    </button>
                </div>
                <SplitPane split="vertical" minSize={350}>
                    <div>
                        <select onChange={this.onChange.bind(this)}>
                            {this.props.standards.map(s => <option>{s}</option>)}
                        </select>
                    </div>
                    <div>
                        {this.secondForm}
                        <Form className="defaultForm"
                              schema={this.newSchema}
                              onSubmit={this.onSubmit.bind(this)}/>
                    </div>
                </SplitPane>
            </SplitPane>
        );
        return (form)
    }
}

export default SettingsForStandards;
