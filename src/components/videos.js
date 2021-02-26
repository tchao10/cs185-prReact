import React, { useState } from 'react';
import '../css/general.css'
import '../css/videos.css'
import dbcooper from '../videoThumbnails/dbcooper.jpg'
import history from '../videoThumbnails/history.jpg'
import seashanty from '../videoThumbnails/seashanty.jpg'
import wynncraft from '../videoThumbnails/wynncraft.jpg'
import tasbot from '../videoThumbnails/tasbot.jpg'

function Videos() {
    var [overlayVideo, updateOverlayVideo] = useState("");
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

    function displayOverlay(videoURL){
        updateOverlayVideo(videoURL);
        updateOverlayDisplay(true);
    }

    function hideOverlay(e){
        if (e.target.id === "videoOverlay"){ // Hide overlay ONLY IF THEY CLICK THE BACKGROUND, NOT THE VIDEO
            updateOverlayDisplay(false);
        }
    }

    function returnVideoOverlayDiv(){
        if (overlayDisplay){
            return (
                <div id="videoOverlay" onClick={hideOverlay}>
                    <iframe src={overlayVideo} alt="Overlay" id="overlayVideo"></iframe>
                </div>
            );
        } else {
            return null;
        }
    }

    return (
        <div>
            <body>
                <div id="videosGallery">
                    <div class="videosDiv">
                        <img src={dbcooper} alt="1" class="videosPageVideo" onClick={() => displayOverlay("https://www.youtube.com/embed/CbUjuwhQPKs")}/>
                    </div>
                    <div class="videosDiv">
                        <img src={history} alt="2" class="videosPageVideo" onClick={() => displayOverlay("https://www.youtube.com/embed/xuCn8ux2gbs")}/>
                    </div>
                    <div class="videosDiv">
                        <img src={seashanty} alt="3" class="videosPageVideo" onClick={() => displayOverlay("https://www.youtube.com/embed/BJhF0L7pfo8")}/>
                    </div>
                    <div class="videosDiv">
                        <img src={wynncraft} alt="4" class="videosPageVideo" onClick={() => displayOverlay("https://www.youtube.com/embed/KxSoT3v_9hs")}/>
                    </div>
                    <div class="videosDiv">
                        <img src={tasbot} alt="5" class="videosPageVideo" onClick={() => displayOverlay("https://www.youtube.com/embed/mSFHKAvTGNk?start=927")}/>
                    </div>
                </div>

                {returnGoToTopButtonDiv()}
                {returnVideoOverlayDiv()}
            </body>
        </div>
    )
}

export default Videos;