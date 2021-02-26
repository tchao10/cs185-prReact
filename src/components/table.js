import React, { useState } from 'react';
import '../css/general.css'
import '../css/table.css'

function Table() {
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
                <h1>Games</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td><a href="https://www.minecraft.net/en-us/">Minecraft</a></td>
                        <td>Sandbox voxel game</td>
                        <td>$26.95</td>
                    </tr>
                    <tr>
                        <td><a href="https://playoverwatch.com/en-us/">Overwatch</a></td>
                        <td>Multiplayer FPS game</td>
                        <td>$19.99</td>
                    </tr>
                    <tr>
                        <td><a href="https://oldschool.runescape.com/">Old School Runescape</a></td>
                        <td>Medieval MMORPG</td>
                        <td>$10.99 per month</td>
                    </tr>
                    <tr>
                        <td><a href="https://pokemongolive.com/en/">Pokémon GO</a></td>
                        <td>Augmented reality mobile game</td>
                        <td>Free</td>
                    </tr>
                </table>
                {returnGoToTopButtonDiv()}
            </body>
        </div>
    )
}

export default Table;