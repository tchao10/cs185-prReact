import React from 'react';

function Tab (props){
    const addTabStyle = () => {
        if (props.output.id === props.activeTab){
            return {padding: 5, marginRight: 5, fontFamily: 'Calibri', fontWeight: 'bold', backgroundColor: '#60df60'}
        } else {
            return {padding: 5, marginRight: 5, fontFamily: 'Calibri'}
        }
    }

    return (
        <div className = "tab" style = {addTabStyle()} onClick = {props.changeTab.bind(this, props.output.id)}>
            {props.output.title}
        </div>
    );
}

export default Tab;