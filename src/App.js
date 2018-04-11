import React, {Component} from 'react';
import SplitPane from 'react-split-pane';
import AddNewElement from './AddNewElement';
import TestElements from './defaultFields/CreateNewElement';
import styles from './styles.css'
import SettingsForStandards from "./SettingsForStandards";
import {standards} from './defaultFields/Const'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            lastName: undefined,
            id: undefined,
            formData: {},
            settingsForStandards: false,
            standards: standards,
        };
    }

    setFromDataOfEvent(event, id) {
        let formData = event.formData;
        this.setState({...this.state, formData, id})
    }

    setFromData(formData, id) {
        console.log(formData, id);
        this.setState({...this.state, formData, id})
    }

    setValue = (name, lastName, id) => {
        this.setState({...this.state, name, lastName, id})
    };

    getTrue() {
        this.setState({...this.state, settingsForStandards: true})
    }

    render() {
        let pane = <span/>;
        if (this.state.settingsForStandards) pane = <SettingsForStandards standards={this.state.standards}/>;
        else pane = (
            <SplitPane split="horizontal" minSize={40}>
                <div className="text">INVEST-TOOLS
                    <button className="btn_settingStandards"
                            onClick={this.getTrue.bind(this)}>Settings for standards</button>
                </div>
                <SplitPane split="vertical" minSize={250}>
                    <div><AddNewElement
                        id={this.state.id}
                        formData={this.state.formData}
                        setValue={this.setValue}
                        setFromData={this.setFromData.bind(this)}/></div>
                    <div><TestElements
                        id={this.state.id}
                        formData={this.state.formData}
                        setFromData={this.setFromDataOfEvent.bind(this)}/></div>
                </SplitPane>
            </SplitPane>
        );

        return (pane)
    }
}

export default App;
