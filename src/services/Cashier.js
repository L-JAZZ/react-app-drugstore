import React from "react";
import {Card, Form, Button, Col} from "react-bootstrap";


export class Cashier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {customerID:'',medicineID:''}
        this.cashierChange = this.cashierChange.bind(this);
        this.submitCashier = this.submitCashier.bind(this);
    }

    submitCashier(event){
        alert(this.state.customerID + "  " + this.state.medicineID);
        event.preventDefault();
    }

    cashierChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
/*    medicineChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }*/

    render() {
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    Add cashier's order
                </Card.Header>
                <Card.Body className={"bg-dark"}>
                    <Form onSubmit={this.submitCashier} id={"cashierFormID"}>
                        <Form.Row>
                            <Form.Group as={Col} controlId={"from_customerID"}>
                                <Form.Label>Customer ID</Form.Label>
                                <Form.Control required
                                                name={"customerID"}
                                                className={"text-white bg-dark"}
                                                type="text"
                                                placeholder="Customer ID"
                                                value={this.state.customerID}
                                                onChange={this.cashierChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId={"from_medicineID"}>
                                <Form.Label>Medicine ID</Form.Label>
                                <Form.Control required
                                              name={"medicineID"}
                                              className={"text-white bg-dark"}
                                              type="text"
                                              placeholder="med ID"
                                              value={this.state.medicineID}
                                              onChange={this.cashierChange}
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