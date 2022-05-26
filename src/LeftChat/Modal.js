import React from 'react'
import { render } from "react-dom";
import useRecorder from '../CurrentChat/useRecorder';
import requestRecorder from '../CurrentChat/useRecorder';


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export default function Modal(props) {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    
    if (props.open == "0") return null
    var id;
    var nameC;
    var server;
    var photo;
    
    const imgGet = (e) => {
        e.preventDefault();
        photo = URL.createObjectURL(e.target.files[0])
    }

    function addContact() {
        id = document.getElementById('ID').value;
        nameC = document.getElementById('NAME').value;
        server = document.getElementById('SERVER').value;    
        props.onClose(id, nameC, server,photo);
    }



    var disp = <h1>{props.text}</h1>;
    
    return (
        <div>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
            <div class="modal-body">
            {disp}
                </div>
                <div>
                <input type={props.type} id="ID" class="form-control" placeholder="ID" ></input>
                <input type={props.type} id="NAME" class="form-control" placeholder="Name" ></input>
                <input type={props.type} id="SERVER" class="form-control" placeholder="server" ></input>
                Photo: 
                <input type="file" id="file-path-img" onChange={imgGet} ></input>
                </div>
                <div class="modal-footer">
                <div><button type="button" class = "btn btn-secondary" onClick={props.x}>cancel</button></div>                
                <button type="button" class="btn btn-primary" onClick={addContact}>Add</button>
                    
                </div>
            </div>
        </div>
    )
}

