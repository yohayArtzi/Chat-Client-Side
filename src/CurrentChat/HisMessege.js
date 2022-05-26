function HisMessege(props) {
    return (
        <div>
        <li class="clearfix">
                <div class="message-data ">
                    <span class="message-data-time float-right">{props.time}</span>
                    <br></br>
                </div>
                <div class="message other-message float-right"> {props.message} </div>
        </li>
        </div>
    );
}

export default HisMessege;