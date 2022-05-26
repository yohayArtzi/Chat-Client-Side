function ChatHeader(props) {
    return (
        <div>
            <div class="chat-header clearfix">
                <div class="row">
                    <div class="about"></div>
                    <div class="col-lg-6">
                        <div class="name">
                        <img src = {props.img}></img>
                            {props.name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatHeader;