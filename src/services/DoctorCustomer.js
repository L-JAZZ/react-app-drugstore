import React from "react";
import {Card, Form, Button, Col} from "react-bootstrap";
import axios from 'axios'


export class DoctorCustomer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {customerID:'',doctorID:''}
        this.custdocChange = this.custdocChange.bind(this);
        this.submitCustdoc = this.submitCustdoc.bind(this);
    }

    submitCustdoc = event => {

        event.preventDefault();

        axios.post("http://localhost:8762/custdoc/"+this.state.doctorID+"/"+this.state.customerID)
            .then(response=>{
                if(response.data != null){
                    alert("new Order added!");
                }
            });
    };

    custdocChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {

        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    Add hospital record
                </Card.Header>
                <Card.Body className={"bg-dark"}>
                    <Form onSubmit={this.submitCustdoc} id={"cashierFormID"}>
                        <Form.Row>
                            <Form.Group as={Col} controlId={"from_customerID"}>
                                <Form.Label>Customer ID</Form.Label>
                                <Form.Control required autoComplete={"off"}
                                                name={"customerID"}
                                                className={"text-white bg-dark"}
                                                type="text"
                                                placeholder="Customer ID"
                                                value={this.state.customerID}
                                                onChange={this.custdocChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId={"from_medicineID"}>
                                <Form.Label>Doctor ID</Form.Label>
                                <Form.Control required autoComplete={"off"}
                                              name={"doctorID"}
                                              className={"text-white bg-dark"}
                                              type="text"
                                              placeholder="doctor ID"
                                              value={this.state.doctorID}
                                              onChange={this.custdocChange}
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
