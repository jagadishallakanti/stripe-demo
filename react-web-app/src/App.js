import './App.css';
import * as React from 'react';
import styled from "styled-components";
import MessageBox from "./components/MessageBox"
import CreatePayeePopup from "./components/CreatePayeePopup";
import CreateCustomerPopup from "./components/CreateCustomerPopup";
import PayNowPopup from "./components/PayNowPopup";

const ButtonGroup = styled.div`
  display: flex;
`
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: {} };
    }

    handleDataChange = (data) => {
        this.setState({ data });
        this.messageBox.addMessage(data.message);
    };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Strip payment demo</p>
                    <div>
                        <ButtonGroup>
                            <CreatePayeePopup data={this.state.data} onDataChange={this.handleDataChange}/>
                            <CreateCustomerPopup data={this.state.data} onDataChange={this.handleDataChange}/>
                            <PayNowPopup data={this.state.data} onDataChange={this.handleDataChange}/>
                        </ButtonGroup>
                    </div>
                    <div>
                        <MessageBox ref={(ref) => (this.messageBox = ref)} />
                    </div>
                </header>
            </div>
        );
    }
}
export default App;
