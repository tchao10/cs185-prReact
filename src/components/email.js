import React, { useState } from 'react';
import '../css/general.css'
import '../css/email.css'


function Email() {
    var [currentEmailInput, updateCurrentEmailInput] = useState("");
    var [validEmailStatus, updateValidEmailStatus] = useState(0); // 0 = no input, 1 = valid, 2 = invalid
    var [goToTopButtonStatus, updateGoToTopButtonStatus] = useState(false); // false = don't display, true = display

    window.onscroll = () => checkGoToTopButton();

    function checkGoToTopButton(){
        var documentElement = document.documentElement;
        var percentageScrolled = documentElement.scrollTop/(documentElement.scrollHeight - documentElement.clientHeight);
        
        if (percentageScrolled > 0.25) {
            updateGoToTopButtonStatus(true);
        }
        else {
            updateGoToTopButtonStatus(false);
        }
    }

    function goToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function returnGoToTopButtonDiv(){
        if (goToTopButtonStatus){
            return (<div id="goToTopButton" onClick={goToTop}>Go to Top</div>);
        } else {
            return null;
        }
    }

    function updateEmail(e){
        updateCurrentEmailInput(e.target.value);
    }
    
    function validateEmail(e){
        e.preventDefault();
        
        if (currentEmailInput.includes("@") && (currentEmailInput.endsWith(".com") || currentEmailInput.endsWith(".edu"))){
            updateValidEmailStatus(1); // 1 = valid
        } else {
            updateValidEmailStatus(2); // 2 = invalid
        }
    }

    function returnValidEmailMessageDiv(){
        if (validEmailStatus === 1){
            return (<div style = {{backgroundColor: "#bbffbb", padding: 10, width: 215}}>✅ Email successfully recorded!</div>);
        } else if (validEmailStatus === 2){
            return (<div style = {{backgroundColor: "#ffbbbb", padding: 10, width: 215}}>❌ Invalid email address.</div>);
        } else {
            return null;
        }
    }

    return (
        <div>
            <body>
                <form id="emailForm">
                    <h3>Enter your email:</h3>
                    <input type="text" id="emailInput" placeholder="johndoe@gmail.com" onChange={updateEmail}/>
                    
                    <br/><br/>
                    
                    <input type="submit" value="Submit" onClick={validateEmail}/>
                    <br/><br/>
                    {returnValidEmailMessageDiv()}
                    {returnGoToTopButtonDiv()}
                </form>
            </body>
        </div>
    )
}


export default Email;