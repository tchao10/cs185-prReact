import React, { Component } from 'react';
import TextPage from './text';
import ImagesPage from './images';
import VideosPage from './videos';
import TablePage from './table';
import EmailPage from './email';
import '../css/general.css'

class Body extends Component {
    render(){
        var displayContent = () => {
            var activeTab = this.props.activeTab;

            if (activeTab === 1){
                return <TextPage />
            } else if (activeTab === 2){
                return <ImagesPage />
            } else if (activeTab === 3){
                return <VideosPage />
            } else if (activeTab === 4){
                return <TablePage />
            } else if (activeTab === 5){
                return <EmailPage />
            } else {
                alert("Error loading page. Please refresh your browser.");
            }
        }

        return displayContent();
    }
}

export default Body;