import React, { useState } from 'react';
import '../css/general.css'
import '../css/text.css'

function Text() {
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

    return (
        <div>
            <body>
                <form id="textForm">
                    <h3>Enter your information:</h3>
                    <label for="firstName">First name:</label><br/>
                    <input type="text" id="firstName" placeholder="John"/>
                    <br/><br/>
                    <label for="lastName">Last name:</label><br/>
                    <input type="text" id="lastName" placeholder="Doe"/>

                    <br/><br/>
                    
                    <label for="gender">Gender:</label>
                    <br/>
                    <input type="radio" name="gender" id="male"/>
                    <label for="male">Male</label>
                    <br/>
                    <input type="radio" name="gender" id="female"/>
                    <label for="female">Female</label>
                    <br/>
                    <input type="radio" name="gender" id="other"/>
                    <label for="other">Other</label>

                    <br/><br/>

                    <label for="socialSecurityNumber">Social Security Number:</label><br/>
                    <input type="text" id="socialSecurityNumber" placeholder="123-45-6789 :)"/>

                    <br/><br/>

                    <input type="submit" value="Submit"/>
                </form>

                {returnGoToTopButtonDiv()}
            </body>
        </div>
    )
}

export default Text;