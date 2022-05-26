import { useRef } from "react";
import users from "./Users";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function Login(props) {

    let navigate = useNavigate();
    const usernameBox = useRef(null);
    const passwordBox = useRef(null);

    function checkValidity() {

        console.log('inside checkValidity!')

        const usrname = document.getElementById('usernameID')
        const password = document.getElementById('loginPassword')
        const btn = document.getElementById('hiddenBtn')

        // vaidate username
        if (usrname.value.length < 1) {
            usrname.setCustomValidity("This is a requierd field")
            console.log('length')
            btn.click()
            return;
        }
        else {
            usrname.setCustomValidity('')
        }

        // check if username exists in the system
        /*
        let currentUser
        let isExists = 0
        let passwordFlag = 0
        users.map((user) => {
            if (user.id == usrname.value) {
                isExists = 1
                if (user.password == password.value){
                    passwordFlag = 1
                    currentUser = user
                }
            }
        })
        
        if (!isExists) {
            usrname.setCustomValidity("There's no such username")
            console.log('not exists')
            btn.click()
            return;
        }
        else {
            usrname.setCustomValidity('')
        }

        // vaidate password existance
        if (password.value.length < 1) {
            password.setCustomValidity("This is a requierd field")
            console.log('length')
            btn.click()
            return;
        }
        else {
            password.setCustomValidity('')
        }

        // check if password match username
        if (!passwordFlag) {
            password.setCustomValidity("password don't match username")
            console.log('not match')
            btn.click()
            return;
        }
        else {
            password.setCustomValidity('')
        }
        */

        console.log('Passed all tests!')
        fetch('https://localhost:7188/User/login', {
            method: 'POST', // or 'PUT'
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({"name" : usrname.value, "password" : password.value}),
            })
            //.then(() => console.log(usrname.value))
            //.then(response => response.json())
            //.then(response => JSON.stringify(response))
            
            .then(() =>{
                var response;
                fetch('https://localhost:7188/User/login')
                //.then(response => response.json())
                //.then(response => JSON.stringify(response))
                .then(function(response) {
                    return response.json();
                  })
                .then(function(data) {
                console.log(data==0)
                    if(data==0){
                    password.setCustomValidity("password don't match username")
                    console.log('not match'+response)
                    btn.click()
                    return;
                }
                fetch('https://localhost:7188/User', {
                    method: 'POST', // or 'PUT'
                    headers: {'Content-Type': 'application/json',},
                    body: JSON.stringify({"name" : usrname.value, "password" : password.value}),
                    })
                    .then(() => console.log(usrname.value))
                    navigate("/chat?username="+usrname.value+"?");
    })
    })

    }

    return (
        <div class="p-3 mb-2 text-black">
            <span className="d-flex justify-content-center">
                <div className="row g-2 col-6 border  border-3 bg-light mt-5 mb-2 rounded">
                    <form>
                        <div class="mb-3">
                            <label for="InputUsername" class="form-label">Username</label>
                            <input ref={usernameBox} type="text" class="form-control" id="usernameID"></input>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input ref={passwordBox} type="password" class="form-control" id="loginPassword"></input>
                        </div>
                        <span className="d-flex justify-content-center">
                            <a href="/Register" class="link-primary">not registered yet? click here!</a>
                        </span>
                        <button type="submit" id="hiddenBtn" hidden></button>
                    </form>
                    <button onClick={checkValidity} class="btn btn-primary">Login</button>
                </div>
            </span>
        </div>
    );
}
export default Login;