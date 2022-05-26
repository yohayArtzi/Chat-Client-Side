import HisMessege from "./HisMessege";
import MyMessege from "./MyMessege";
import React, { useState } from 'react';

function ChatHistory(props) {
    return (
        <div class="chat-history">
            <ul class="m-b-0">
            {props.message.map((value, index)=>{
                if (value.myMessage){
                    return <div><MyMessege message={value.content} time={value.time} /></div>;
                }
                else {
                    return <div><HisMessege message={value.content} time={value.time} /></div>;
                }

              })}
            </ul>
        </div>
    );
}

export default ChatHistory;


