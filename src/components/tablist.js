import React, { Component } from 'react';
import Tab from './tab';
import '../css/general.css'

const Tabs = ["Text", "Images", "Videos", "Table", "Email"];

class Tablist extends Component { 
    render() {
        return (
            this.props.tabs.map((tab) => 
                <Tab output = {tab} activeTab = {this.props.activeTab} changeTab = {this.props.changeTab}/>
            )
        )
    }
}

export default Tablist;