import React, { useState } from 'react';
import Modal from './Modal';

function LeftHeader(props) {
  const [getOpen,setOpen] = useState("0");
  
  function open(){
    setOpen("1");
  }
  
  const close = (id, nameC,server, photo) => {
    setOpen("0");
    props.input(id, nameC,server, photo);
  }
  const x = (id, nameC,server, photo) => {
    setOpen("0");
  }
  
  return (
    <div class="chat-header2">
      <img src={props.img} width="50" height="50"></img>
      {props.me}
      <button class="btn btn-outline-secondary" onClick={open}><i class="fa fa-user-plus"></i></button>    
      <Modal open={getOpen} onClose = {close} x={x} type = "text" text = "Add new contact"/>
    </div>


  );
}

export default LeftHeader;