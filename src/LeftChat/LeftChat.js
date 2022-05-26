import { propTypes } from "react-bootstrap/esm/Image";
import Friend from "./Friend";
import React, { useState, useEffect} from 'react';
import CurrentChat from "../CurrentChat/CurrentChat";
import LeftHeader from "./LeftHeader";

function LeftChat(props) {

const [prop, setP] = useState()

const [newContact, setNewContact] = useState([])

const [contacts1, setContacts1] = useState([])

useEffect(() => {
  fetch('https://localhost:7188/api/Contacts')
  .then(response => response.json())
  .then(json => setContacts1(json))
  //.then(json => console.log(contacts1))
},[contacts1])

/*
useEffect(() => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      "id": 10,
      "name": newContact,
      "messages": []})
};
fetch('https://localhost:7188/Contacts', requestOptions)
.then(json => setContacts1(json))
   
}, [newContact]);
*/


var con = contacts1;
  
const input = (id, nameC,server, photo) => {
  if(id==null){
    console.log("null");
    return;
  }
  const pData = {
    "id": id,
    "name": nameC,
    "server": server,
    "last": "",
    "lastDate": ""
  }
  fetch('https://localhost:7188/api/Contacts/', {
    method: 'POST', // or 'PUT'
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(pData),
    })
    console.log(id)
    const data2 = {"from": props.me, "to": id, "server": "localhost:7188"}
    //.then(() => 
    fetch('https://'+server+'/api/invitations', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(data2),
      })
    .then(() => console.log("transfer"+ id))
    //)

    } 

  return (
    <div>
      <div id="plist" class="people-list">
        <LeftHeader me = {props.me} img={props.img} input={input} />
        <div class="list2">
          <ul class="list-unstyled chat-list mt-2 mb-0">
            {con.map((value, index)=>{
              return <Friend me = {props.me} name= {value.name} id= {value.id} last= {value.last} lastTime= {value.lastDate} set = {setP} />;
            })}
          </ul>
        </div>
      </div>
      {prop}
    </div>
  );
}

export default LeftChat;
