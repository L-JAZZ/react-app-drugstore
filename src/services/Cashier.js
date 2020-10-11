import React from "react";
import {Card, Form, Button, Col} from "react-bootstrap";
import axios from 'axios'


export class Cashier extends React.Component {

    constructor(props) {
        super(props);
        this.state = {customerID:'',medicineID:''}
        this.cashierChange = this.cashierChange.bind(this);
        this.submitCashier = this.submitCashier.bind(this);
    }

/*    submitCashier(event){
        alert(this.state.customerID + "  " + this.state.medicineID);
        event.preventDefault();
    }*/

    submitCashier = event => {
        event.preventDefault();

        axios.post("http://localhost:8091/api/cashier/sell/"+this.state.customerID+"/"+this.state.medicineID)
            .then(response=>{
                if(response.data != null){
                    alert("new Order added!");
                }
            });
    };

    cashierChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        /*const CashierConstant={
            customerID:this.state.customerID,
            medicineID: this.state.customerID
        };*/
        const {customerID,medicineID} = this.state;

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
                                <Form.Control required autoComplete={"off"}
                                                name={"customerID"}
                                                className={"text-white bg-dark"}
                                                type="text"
                                                placeholder="Customer ID"
                                                value={customerID}
                                                onChange={this.cashierChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId={"from_medicineID"}>
                                <Form.Label>Medicine ID</Form.Label>
                                <Form.Control required autoComplete={"off"}
                                              name={"medicineID"}
                                              className={"text-white bg-dark"}
                                              type="text"
                                              placeholder="med ID"
                                              value={medicineID}
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