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
class CreatePayee extends React.Component {
    handleClick = async () => {
        // const data = this.props.data;
        // const url = "http://localhost:3000/create_payee"
        // const req_data = {
        //     "first_name": "test_payee",
        //     "last_name": "1",
        //     "email_address": "test_payee_1@example.com"
        // };
        //
        // const requestOptions = {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        //     body: JSON.stringify(req_data)
        // };
        //
        // const response = await fetch(url, requestOptions);
        // const json_response =  await response.json();
        //
        // data.payee_id = json_response.payee_id
        // data.message = "Payee created successfully : " + data.payee_id
        // console.log(data)
        // this.props.onDataChange(data);
    };

    render() {
        return (
            <Button onClick={this.handleClick}>Create Payee</Button>
        );
    }
}

export default CreatePayee;