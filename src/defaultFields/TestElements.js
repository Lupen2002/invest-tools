import React, {Component} from "react";
import styles from '../styles.css'

import Form from "react-jsonschema-form";

class TestElements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            formData: undefined,
        };
        this.JSONschema = {
            "title": "A registration form",
            "type": "object",
            "required": [
                "CompanyName",
                "Margin",
                "Capitalization"
            ],
            "properties": {
                "CompanyName": {
                    "type": "string",
                    "title": "Company Name"
                },
                "Margin": {
                    "type": "integer",
                    "title": "Margin"
                },
                "Capitalization": {
                    "type": "integer",
                    "title": "Capitalization"
                },
                "year": {
                    "type": "integer",
                    "title": "Year"
                },
                "quarter": {
                    "type": "integer",
                    "title": "Quarter",
                    "enum": [
                        1,
                        2,
                        3,
                        4
                    ]
                },
                "info": {
                    "type": "string",
                    "title": "Info"
                },
                "standard": {
                    "type": "string",
                    "title": "Standard",
                    "enum": [
                        "IFRS",
                        "RAS"
                    ]
                }
            }
        };
        this.uiSchema = {
            "Capitalization": {
                "ui:autofocus": true,
                "ui:emptyValue": ""
            },
            "year": {
                "ui:widget": "updown",
                "ui:title": "Report year"
            },
            "info": {
                "ui:widget": "textarea"
            },
            "date": {
                "ui:widget": "alt-datetime"
            }
        }
    }

    id = undefined;
    flag = false;

    // TODO I can't throw event.fromData to App.js
    onSubmit(event) {
        this.id = this.state.id;
        this.state.id = undefined;
        this.state.formData = undefined;
        this.flag = false
        this.props.setFromData(event, this.id);
    }

    static _isEmpty(obj) {
        return (Object.getOwnPropertyNames(obj).length > 1);
    }

    render() {
        if (this.state.formData !== this.props.formData && this.state.id !== this.props.id && this.flag) {
            this.state.id = this.props.id;
            this.state.formData = this.props.formData;
        } else this.flag = true
        return (
            <Form className="myForm"
                  formData={this.state.formData}
                  schema={this.JSONschema}
                  uiSchema={this.uiSchema}
                  onChange={e => console.log(e)}
                  onSubmit={this.onSubmit.bind(this)}
                  onError={console.log("errors")}/>
        )
    }
}

export default TestElements;
