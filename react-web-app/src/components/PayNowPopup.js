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

class PayNowPopup extends React.Component {
    handleClose = async (close) => {
        const data = this.props.data;
        const url = "http://localhost:3000/pay_now"
        const req_data = {
            "amount": data.payment_amount,
            "customer" : data.customer_id,
            "payee": data.payee_id,
            "card": {
                "number": data.card_number,
                "exp_month": data.card_exp_month,
                "exp_year": data.card_exp_year,
                "cvc": data.card_cvc
            }
        };

        console.log(JSON.stringify(req_data))
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify(req_data)
        };

        const response = await fetch(url, requestOptions);
        if(response.status === 200 ) {
            data.message = "Payment made successfully to " + data.payee_id + " by " + data.customer_id +" for amount "+req_data.amount
        } else {
            data.message = "Payment transaction filed plz contact customer support"
        }

        await this.props.onDataChange(data);
        close();
    };

    handleAmount = (event) => {
        const data = this.props.data;
        data.payment_amount = event.target.value;
    };
    handleCustomerId = (event) => {
        const data = this.props.data;
        data.customer_id = event.target.value;
    };

    handlePayeeId = (event) => {
        const data = this.props.data;
        data.payee_id = event.target.value;
    };

    handleCardNumber = (event) => {
        const data = this.props.data;
        data.card_number = event.target.value;
    };

    handleCardExpMonth = (event) => {
        const data = this.props.data;
        data.card_exp_month = event.target.value;
    };

    handleCardExpYear = (event) => {
        const data = this.props.data;
        data.card_exp_year = event.target.value;
    };

    handleCardCVC = (event) => {
        const data = this.props.data;
        data.card_cvc = event.target.value;
    };



    render() {
        const data = this.props.data;
        data.card_number = "4242424242424242"
        data.card_exp_month = 12
        data.card_exp_year = 2034
        data.card_cvc = "555"
        return (
            <div>
                <Popup trigger={<Button>Pay Now</Button>} modal nested>
                    {(close) => (
                        <center>
                            <div className="modal">
                                <div className="content">
                                <h1>Enter payee information</h1>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>Amount</td>
                                            <td><input type="text" onChange={this.handleAmount}/></td>
                                        </tr>
                                        <tr>
                                            <td>customer id</td>
                                            <td><input type="text" onChange={this.handleCustomerId} value={this.props.data.customer_id}/></td>
                                        </tr>
                                        <tr>
                                            <td>Payee id</td>
                                            <td><input type="text" onChange={this.handlePayeeId} value={this.props.data.payee_id}/></td>
                                        </tr>
                                        <tr>
                                            <td>Card number:</td>
                                            <td><input type="text" onChange={this.handleCardNumber} value={this.props.data.card_number}/></td>
                                        </tr>
                                        <tr>
                                            <td>Exp month  :</td>
                                            <td><input type="text" onChange={this.handleCardExpMonth} value={this.props.data.card_exp_month} /></td>
                                        </tr>
                                        <tr>
                                            <td>Exp year  :</td>
                                            <td><input type="text" onChange={this.handleCardExpYear} value={this.props.data.card_exp_year}/></td>
                                        </tr>
                                        <tr>
                                            <td>cvc  :</td>
                                            <td><input type="text" onChange={this.handleCardCVC} value={this.props.data.card_cvc}/></td>
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

export default PayNowPopup;
