import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

class CreatePayeePopup extends React.Component {
    handleClose = async (close) => {
        const data = this.props.data;
        const url = "http://localhost:3000/create_payee"
        const req_data = {
            "first_name": data.payee_first_name,
            "last_name": data.payee_last_name,
            "email_address": data.payee_email
        };

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify(req_data)
        };

        const response = await fetch(url, requestOptions);
        const json_response =  await response.json();

        data.payee_id = json_response.payee_id
        data.message = "Payee created successfully : " + data.payee_id
        console.log(data)
        await this.props.onDataChange(data);

        close();
    };

    handleFirstNameChange = (event) => {
        const data = this.props.data;
        data.payee_first_name = event.target.value;
    };
    handleLastNameChange = (event) => {
        const  data = this.props.data;
        data.payee_last_name = event.target.value;
    };
    handleEmailChange = (event) => {
        const data = this.props.data;
        data.payee_email = event.target.value;
    };


    render() {
        return (
            <div>
                <Popup trigger={<Button>Create Payee</Button>} modal nested>
                    {(close) => (
                        <center>
                            <div className="modal">
                                <div className="content">
                                <h1>Enter payee information</h1>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>First name:</td>
                                                <td> <input type="text" onChange={this.handleFirstNameChange}/></td>
                                            </tr>
                                            <tr>
                                                <td>Last name:</td>
                                                <td> <input type="text" onChange={this.handleLastNameChange}/></td>
                                            </tr>
                                            <tr>
                                                <td>Email address: </td>
                                                <td><input type="text" onChange={this.handleEmailChange}/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <Button onClick={() => this.handleClose(close)}>
                                        submit
                                    </Button>
                                </div>
                            </div>
                        </center>
                    )}
                </Popup>
            </div>
        );
    }
}

export default CreatePayeePopup;
