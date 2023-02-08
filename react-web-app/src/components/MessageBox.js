import * as React from "react";
class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
    }

    addMessage = (message) => {
        this.setState((prevState) => ({
            messages: [...prevState.messages, message],
        }));
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.messages.map((message, index) => (
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default MessageBox;