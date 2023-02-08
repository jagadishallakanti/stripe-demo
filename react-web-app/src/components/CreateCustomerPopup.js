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

class CreateCustomerPopup extends React.Component {
    handleClose = async (close) => {
        const data = this.props.data;
        const url = "http://localhost:3000/create_customer"
        const req_data = {
            "name": data.customer_name,
            "email": data.customer_email,
            "payee": data.payee_id
        };

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify(req_data)
        };

        const response = await fetch(url, requestOptions);
        const json_response = await response.json();

        data.customer_id = json_response.customer_id
        data.message = "Customer created successfully : " + data.customer_id
        console.log(data)
        this.props.onDataChange(data);

        close();
    };

    handleCustomerNameChange = (event) => {
        const data = this.props.data;
        data.customer_name = event.target.value;
    };
    handleCustomerEmailChange = (event) => {
        const  data = this.props.data;
        data.customer_email = event.target.value;
    };
    handleCustomerPayeeChange = (event) => {
        const data = this.props.data;
        data.payee_id = event.target.value;
    };


    render() {
        return (
            <div>
                <Popup trigger={<Button>Create Customer</Button>} modal nested>
                    {(close) => (
                        <center>
                            <div className="modal">
                                <div className="content">
                                <h1>Enter Customer Information</h1>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Name:</td>
                                                <td><input type="text" onChange={this.handleCustomerNameChange}/></td>
                                            </tr>
                                            <tr>
                                                <td>Email: </td>
                                                <td> <input type="text" onChange={this.handleCustomerEmailChange}/></td>
                                            </tr>
                                            <tr>
                                                <td>Payee id:</td>
                                                <td><input type="text" onChange={this.handleCustomerPayeeChange} value={this.props.data.payee_id} /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <Button onClick={() => this.handleClose(close)}>submit</Button>
                                </div>
                            </div>
                        </center>
                    )}
                </Popup>
            </div>
        );
    }
}

export default CreateCustomerPopup;
