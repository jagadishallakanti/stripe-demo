import * as React from "react";

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
class PayNow extends React.Component {
    handleClick = async () => {
        // const data = this.props.data;
        // const url = "http://localhost:3000/pay_now"
        // const req_data = {
        //     "amount": 10000,
        //     "customer" : data.customer_id,
        //     "payee": data.payee_id,
        //     "card": {
        //         "number": "4242424242424242",
        //         "exp_month": 12,
        //         "exp_year": 2034,
        //         "cvc": "222"
        //     }
        // };
        //
        // const requestOptions = {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        //     body: JSON.stringify(req_data)
        // };
        //
        // const response = await fetch(url, requestOptions);
        // const json_response = await response.json();
        // data.payment_id = json_response.id
        // data.message = "Payment made successfully to " + data.payee_id + " by " + data.customer_id +" for amount "+req_data.amount
        // console.log(data)
        // this.props.onDataChange(data);
    };

    render() {
        return (
            <Button onClick={this.handleClick}>Pay Now</Button>
        );
    }
}

export default PayNow;