import { useState } from "react";


export function use(){
    const [usrname, setusrname] = useState("");
    return [usrname, setusrname];
}