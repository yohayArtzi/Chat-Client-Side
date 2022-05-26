import React, { useState } from 'react';
import CurrentChat from "../CurrentChat/CurrentChat";
import MyMessege from '../CurrentChat/MyMessege';

function Friend(props) {
  
  const [last, setLast] = useState([props.last, props.lastTime]);
  
  const whatWasLast = (childdata, time) => {
    if(childdata!="0"){
        setLast([childdata, time]);
      
    }
  }
  var lastMessage = last[0] 
  var lastTime= last[1]


  return (
    <li class="clearfix"
      onClick={() => {props.set(<CurrentChat me = {props.me} name={props.name} id= {props.id} img={props.img} getLast={whatWasLast}/>); }}>
      <div>
        <div class="name">
          <img src={props.img} width="50" height="50"></img>
          {props.name}
          <span class="status"> {props.lastTime}</span>
        </div>
        <div class="lastMessege">{props.last}</div>
      </div>
    </li>
  );
}

export default Friend;
