import React from "react";
import {Card, Form, Button, Col} from "react-bootstrap";
import axios from 'axios'


export class Customer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name:'',surname:'',balance:'',prescription:''}
        this.customerChange = this.customerChange.bind(this);
        this.submitCustomer = this.submitCustomer.bind(this);
    }

    customerChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })

    }

    //arrow function that builds JSON that we can put into post request
    submitCustomer = event => {
        const CustomerConstant={
            name:  this.state.name,
            surname: this.state.surname,
            balance: this.state.balance,
            prescription: this.state.prescription
        };

        event.preventDefault();

        axios.post("http://localhost:8086/api/customer/post/",CustomerConstant)
            .then(response=>{
                if(response.data != null){
                    alert("new Order added!");
                }
            });
    };



    render() {
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    Add customer
                </Card.Header>
                <Card.Body className={"bg-dark"}>
                    <Form onSubmit={this.submitCustomer} id={"customerFormID"}>
                        <Form.Row>
                            <Form.Group as={Col} controlId={"from_customerName"}>
                                <Form.Label>Customer Name</Form.Label>
                                <Form.Control required autoComplete={"off"}
                                              name={"name"}
                                              className={"text-white bg-dark"}
                                              type="text"
                                              placeholder="Customer Name"
                                              value={this.state.name}
                                              onChange={this.customerChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId={"from_customerSurname"}>
                                <Form.Label>Surname</Form.Label>
                                <Form.Control required autoComplete={"off"}
                                              name={"surname"}
                                              className={"text-white bg-dark"}
                                              type="text"
                                              placeholder="Customer surname"
                                              value={this.state.surname}
                                              onChange={this.customerChange}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId={"from_balance"}>
                                <Form.Label>Balance</Form.Label>
                                <Form.Control required autoComplete={"off"}
                                              name={"balance"}
                                              className={"text-white bg-dark"}
                                              type="text"
                                              placeholder="Customer balance"
                                              value={this.state.balance}
                                              onChange={this.customerChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Prescription</Form.Label>
                                <Form.Control
                                              name={"prescription"}
                                              className={"text-white bg-dark"}
                                              type="checkbox"
                                              value={this.state.prescription}
                                              onChange={this.customerChange}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Button size={"sm"} variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}