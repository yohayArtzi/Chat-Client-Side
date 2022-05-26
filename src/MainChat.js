import './MainChat.css';
import LeftChat from './LeftChat/LeftChat';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function MainChat(props) {
    let params = new URLSearchParams(document.location.search);
    const getP = params.get("username");
    const words = getP.split("?");
    var myUser = words[0];
    var myImg = words[1];
    var check = params.toString()
    console.log(check)
    
    



    return (
        <div>
            <div class="container">
                <div class="row clearfix">
                    <div class="col-lg-12">
                        <div class="chat-app">    
                        <LeftChat me={myUser} img={myImg} check={check}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainChat;
