import React, { useState, useEffect } from 'react';
import MyMessege from './MyMessege';
import ChatHistory from './ChatHistory';
import useRecorder from '../CurrentChat/useRecorder';
import HisMessege from './HisMessege';



function InputMessage(props) {

    var val = 0;
    var time = (new Date).toLocaleTimeString();
    
    const [idM, setidM] = useState(1);
    const [messagesA, setA] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7188/api/Contacts/'+ props.id+'/messages')
        .then(response => response.json())
        .then(json => setA(json))
      },[messagesA])
    

    function setting() {
        val = document.querySelector('#myInput').value;
        console.log(val)
        if (val != 0) {
            const data = {"id": idM,"time": time,"content": val,"myMessage": true}
            setidM(idM+1);
            
            fetch('https://localhost:7188/api/Contacts/'+props.id+'/messages', {
            method: 'POST', // or 'PUT'
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(data),
            })
            .then(() => console.log("id:"+idM))
            
            var response = fetch('https://localhost:7188/api/Contacts/'+ props.id)
            .then(response => response.json())
            .then(response => {
                const data2 = {"from": props.me,"to": props.id,"content": val}
                fetch('https://'+response.server+'/api/transfer', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',},
                    body: JSON.stringify(data2),
                    })
                    .then(() => console.log("transfer"))
            })
            
        }

        document.getElementById('myInput').value = '';
        if (typeof val != 'string') {
            if (val.type == "img") {
                props.getLast(<div><i class="fa fa-picture-o"></i> Image</div>, time);
            }
            else if (val.type == "video") {
                props.getLast(<div><i class="fa fa-video-camera"></i> Video</div>, time);
            }
            else if (val.type == "audio") {
                props.getLast(<div><i class="fa fa-microphone"></i> Audio</div>, time);
            }
        }
        else {
            props.getLast(val, time);
        }
    }
    
    const imgGet = (e) => {
        e.preventDefault();
        val = URL.createObjectURL(e.target.files[0])
    }

    const vidGet = (e) => {
        e.preventDefault();
        console.log (e)
        val = URL.createObjectURL(e.target.files[0])
    }


    const closeP = () => {
        val = val.split("fakepath").pop();
        console.log(val)
        val = <img src={val} ></img>
        setting();
    }
    const closeV = () => {
        val = val.split("fakepath").pop();
        console.log(val)
        val = <video autoPlay id="vid"><source src={val} type="video/mp4"></source></video>
        setting();
    }
    const closeM = () => {
        val = <audio id="rec" src={audioURL} controls />
        setting();
    }

    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    return (
        <div>
            <ChatHistory message={messagesA} />
            <div class="chat-message clearfix">
                <div class="input-group mb-0">
                    <div class="btn-group">
                        <button type="button" class="btn btn-default dropdown-toggle btn-outline-secondary" data-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-paperclip"></i>
                        </button>
                        <ul class="dropdown-menu ul-drp" role="menu">
                            <a href="#" data-toggle="modal" data-target="#myModal1"> <i class="btn btn-outline-secondary fa fa-picture-o"></i></a>
                            <a href="#" data-toggle="modal" data-target="#myModal2"> <i class="btn btn-outline-secondary fa fa-video-camera"></i></a>
                            <a href="#" data-toggle="modal" data-target="#myModal3"> <i class="btn btn-outline-secondary fa fa-microphone"></i></a>
                        </ul>
                    </div>
                    <div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="myModalLabel">Select Image</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div class="modal-body">
                                    <input type="file" id="file-path-img" onChange={imgGet} ></input>;
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={closeP}>send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="myModalLabel">Select Video</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div class="modal-body">
                                    <input type="file" onChange={vidGet} id="file-path-vid" ></input>;
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={closeV}>send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title" id="myModalLabel">Select Image</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div class="modal-body">
                                    <div>
                                        <h1>Record</h1>
                                        <audio src={audioURL} controls />
                                        <button onClick={startRecording} disabled={isRecording}>
                                            start recording
                                        </button>
                                        <button onClick={stopRecording} disabled={!isRecording}>
                                            stop recording
                                        </button></div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={closeM}>send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input id="myInput" type="text" class="form-control" placeholder="New message here..." ></input>
                    <div class="input-group-prepend">
                        <button type="button" class="btn btn-success" onClick={setting}><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputMessage;
