//import './App.css'
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainChat from './MainChat';
import React, { useState } from 'react';



function App() {
  /*
  var users = [
    { id: 'kermit', password: "kermit1", img: "/kermit.png"  },
    { id: 'miss_piggy', password: "misspiggy1", img: "/kermit.png" },
    { id: 'fozzie_bear', password: "fozziebear1", img: "/kermit.png" },
    { id: 'gonzo', password: "gonzo1", img: "/kermit.png" },
    { id: 'scooter', password: "scooter1", img: "/kermit.png" }
  ];
  */

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login  />}></Route>
          <Route path="/Register" element={<Register   />}></Route>
          <Route path="/chat" element={<MainChat />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
<Background />
*/