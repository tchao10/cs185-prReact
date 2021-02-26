import React, { useState } from 'react';
import '../css/general.css'
import '../css/images.css'
import japan1 from '../images/japan1.png'
import skyscrapers from '../images/skyscrapers.png'
import ferrisWheel from '../images/ferris-wheel.png'
import night2 from '../images/night2.png'
import night1 from '../images/night1.png'
import rain from '../images/rain.png'
import train from '../images/train.png'
import japan2 from '../images/japan2.png'

function Images() {
    var [overlayImage, updateOverlayImage] = useState(null);
    var [overlayDisplay, updateOverlayDisplay] = useState(false);
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

    function displayOverlay(image){
        updateOverlayImage(image);
        updateOverlayDisplay(true);
    }

    function hideOverlay(e){
        if (e.target.id === "imageOverlay"){ // Hide overlay ONLY IF THEY CLICK THE BACKGROUND, NOT THE IMAGE
            updateOverlayDisplay(false);
        }
    }

    function returnImageOverlayDiv(){
        if (overlayDisplay){
            return (
                <div id="imageOverlay" onClick={hideOverlay}>
                    <img src={overlayImage} alt="Overlay" id="overlayImage"/>
                </div>
            );
        } else {
            return null;
        }
    }

    return (
        <div>
            <body>
                <div id="imagesGallery">
                    <div class="imageDiv">
                        <img src={japan1} alt="1" class="imagesPageImage" onClick={() => displayOverlay(japan1)}/>
                    </div>
                    <div class="imageDiv">
                        <img src={skyscrapers} alt="2" class="imagesPageImage" onClick={() => displayOverlay(skyscrapers)}/>
                    </div>
                    <div class="imageDiv">
                        <img src={ferrisWheel} alt="3" class="imagesPageImage" onClick={() => displayOverlay(ferrisWheel)}/>
                    </div>
                    <div class="imageDiv">
                        <img src={night2} alt="4" class="imagesPageImage" onClick={() => displayOverlay(night2)}/>
                    </div>
                    <div class="imageDiv">
                        <img src={night1} alt="5" class="imagesPageImage" onClick={() => displayOverlay(night1)}/>
                    </div>
                    <div class="imageDiv">
                        <img src={rain} alt="6" class="imagesPageImage" onClick={() => displayOverlay(rain)}/>
                    </div>
                    <div class="imageDiv">
                        <img src={train} alt="7" class="imagesPageImage" onClick={() => displayOverlay(train)}/>
                    </div>
                    <div class="imageDiv">
                        <img src={japan2} alt="8" class="imagesPageImage" onClick={() => displayOverlay(japan2)}/>
                    </div>
                </div>

                {returnGoToTopButtonDiv()}
                {returnImageOverlayDiv()}
            </body>
        </div>
    )
}

export default Images;