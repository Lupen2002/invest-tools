import React, {Component} from 'react';
import App from "./App";
import SplitPane from 'react-split-pane';
import {standards} from './defaultFields/Const'
import {newIfrsSchema} from './defaultFields/storageForIFRS'
import Form from "react-jsonschema-form";
import {builderSchema} from "./defaultFields/Storage";

class SettingsForStandards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainForm: false,
            dataForm: undefined,
            selectStandard: standards[0],
        };
        this.secondForm = <span/>;
        this.newSchema = newIfrsSchema;
    }

    _backToMainWindow() {
        this.setState({...this.state, mainForm: true})
    }

    onSubmit(e) {
        let dataForm = e.formData["newValue"];
        this.setState({...this.state, dataForm});
    }

    onChange(e) {
        let selectStandard = standards[e.target.selectedIndex];
        this._chooseStandard(selectStandard);
    }

    _chooseStandard(standard) {
        let builder = builderSchema(standard);
        let schema = builder.getSchema();
        let newSchema = builder.newSchema();
        this.secondForm = <Form schema={schema}/>;
        this.newSchema = newSchema
    }

    render() {
        let form = <span/>;
        if (this.state.dataForm !== undefined) {
            let builder = builderSchema(this.state.selectStandard);
            builder.createProperties(this.state.dataForm);
            let schema = builder.getSchema();
            this.secondForm = <Form schema={schema}/>;
            this.state.dataForm = undefined
        }
        if (this.state.mainForm) form = <App/>;
        else form = (
            <SplitPane split="horizontal" minSize={40}>
                <div className="text">INVEST-TOOLS
                    <button className="btn_settingStandards"
                            onClick={this._backToMainWindow.bind(this)}>Main form
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
