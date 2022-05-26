function MyMessege(props) {
    return (
        
        <div>
            <li class="clearfix">
                <div class="message-data">
                    <span class="message-data-time">{props.time}</span>
                </div>
                <div class="message my-message">{props.message}</div>
            </li>
        </div>
    );
}

export default MyMessege;