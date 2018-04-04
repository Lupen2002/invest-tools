import React, {Component} from "react";
import styles from '../styles.css'
import Const, {jsonSchema, uiSchema, ifrsSchema, rasSchema, standards} from './Const'
import Form from "react-jsonschema-form";
import SplitPane from 'react-split-pane';

class TestElements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            formData: undefined,
            standardForm: <span/>,
        };
    }

    flag = false;

    // TODO I can't throw event.fromData to App.js
    onSubmit(event) {
        let id = this.state.id;
        this.state.id = undefined;
        this.state.formData = undefined;
        this.flag = false;
        this.props.setFromData(event, id);
    }

    _setSchemaInForm(schema) {
        return (<Form className="standardForm"
                      schema={schema}
                      onError={console.log("errors")}/>)
    }

    _check(event) {
        let formData = event.formData;
        let standard = event.formData["standard"];
        if (standard === "IFRS") this.setState({
            ...this.state,
            standardForm: this._setSchemaInForm(ifrsSchema),
            formData
        });
        else if (standard === "RAS") this.setState({
            ...this.state,
            standardForm: this._setSchemaInForm(rasSchema), formData
        });
        else this.setState({...this.state, standardForm: <span/>, formData});
    }

    render() {
        if (this.state.formData !== this.props.formData && this.state.id !== this.props.id && this.flag) {
            this.state.id = this.props.id;
            this.state.formData = this.props.formData;
        } else this.flag = true;
        return (
            <SplitPane split="vertical" minSize={350}>
                <div><Form className="defaultForm"
                           formData={this.state.formData}
                           schema={jsonSchema}
                           uiSchema={uiSchema}
                           onChange={this._check.bind(this)}
                           onSubmit={this.onSubmit.bind(this)}
                           onError={console.log("errors")}/></div>
                <div>{this.state.standardForm}</div>
            </SplitPane>

        )
    }
}

export default TestElements;
