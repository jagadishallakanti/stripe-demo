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
class CreateCustomer extends React.Component {
    handleClick = async () => {
        // const data = this.props.data;
        // const url = "http://localhost:3000/create_customer"
        // const req_data = {
        //     "name": "test_customer_1",
        //     "email": "test_customer_1@example.com",
        //     "payee": data.payee_id
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
        //
        // data.customer_id = json_response.customer_id
        // data.message = "Customer created successfully : " + data.customer_id
        // console.log(data)
        // this.props.onDataChange(data);
    };

    render() {
        return (
            <Button onClick={this.handleClick}>Create Customer</Button>
        );
    }
}

export default CreateCustomer;