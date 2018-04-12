import React, {Component} from 'react';
import App from "./App";
import SplitPane from 'react-split-pane';
import {standards, createNewSchema} from './defaultFields/Const'
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
        this.newSchema = createNewSchema("New IFRS value");
    }

    _backToMainWindow() {
        this.setState({...this.state, mainForm: true})
    }

    onSubmit(e) {
        let dataForm = e.formData["newValue"];
        let builder = builderSchema(this.state.selectStandard);
        builder.createProperties(dataForm);
        let schema = builder.getSchema();
        this.secondForm = <Form schema={schema}/>;
        this.setState({...this.state, dataForm});
        this.state.dataForm = undefined
    }

    onChange(e) {
        let selectStandard = standards[e.target.selectedIndex];
        this._chooseStandard(selectStandard);
    }

    _chooseStandard(standard) {
        let builder = builderSchema(standard);
        let schema = builder.getSchema();
        let newSchema = builder.newSchema();
        if (schema !== undefined) this.secondForm = <Form schema={schema}/>;
        if (newSchema !== undefined) this.newSchema = newSchema;
        this.setState({...this.state, selectStandard: standard})
    }

    _show() {
        let builder = builderSchema(this.state.selectStandard);
        let schema = builder.getSchema();
        if (schema !== undefined) return <Form schema={schema}/>;
    }

    render() {
        let form = <span/>;
        this.secondForm = this._show();
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
