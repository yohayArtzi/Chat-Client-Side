//import './App.css'
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainChat from './MainChat';
import React, { useState } from 'react';





function Glob(props) {
  
var listNames = ["aaron","birt","coby"]
var itemList =[]
for (let i=0;i<listNames.length;i++){
    var p = "/Chat/"+listNames[i];
    itemList.push(<Route path={p} element={<MainChat name={listNames[i]} />}></Route>)
}
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login names={listNames} />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          {itemList}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Glob;

/*
<Background />
*/