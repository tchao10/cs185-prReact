import './App.css';
import './css/general.css';

import Tablist from './components/tablist'
import Body from './components/body'
import { Component } from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            active: 1
        }

        this.changeTab = (id) => {
            this.setState({
                active: id
            })
        }
    }

    render(){
        const tabs = [{
            id: 1,
            title: 'Text'
        },{
            id: 2,
            title: 'Images'
        },{
            id: 3,
            title: 'Video'
        },{
            id: 4,
            title: 'Table'
        },{
            id: 5,
            title: 'Email'
        }]

        return (
            <div className = "App">
                <div className = "navBar">
                    <Tablist tabs = {tabs} activeTab = {this.state.active} changeTab = {this.changeTab}/>
                </div>

                <div className = "mainBody">
                    <Body activeTab = {this.state.active}/>
                </div>
            </div>
        );
    }
}

export default App;
