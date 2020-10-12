import React from "react";
import {Card, Form, Button, Col} from "react-bootstrap";
import axios from 'axios'


export class Medicine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {medName:'',quantity:'',price:'',prescription:''}
        this.MedicineChange = this.MedicineChange.bind(this);
        this.submitMedicine = this.submitMedicine.bind(this);
    }

    MedicineChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })

    }

    //arrow function that builds JSON that we can put into post request
    submitMedicine = event => {
        const MedicineConstant={
            medName:  this.state.medName,
            quantity: this.state.quantity,
            price: this.state.price,
            prescription: this.state.prescription
        };

        event.preventDefault();

        axios.post("http://localhost:8088/api/medicine/post/",MedicineConstant)
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
                    Add Medicine
                </Card.Header>
                <Card.Body className={"bg-dark"}>
                    <Form onSubmit={this.submitMedicine} id={"customerFormID"}>
                        <Form.Row>
                            <Form.Group as={Col} controlId={"from_customerName"}>
                                <Form.Label>Medicine Name</Form.Label>
                                <Form.Control required autoComplete={"off"}
                                              name={"medName"}
                                              className={"text-white bg-dark"}
                                              type="text"
                                              placeholder="Medicine Name"
                                              value={this.state.medName}
                                              onChange={this.MedicineChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId={"from_customerSurname"}>
                                <Form.Label>quantity</Form.Label>
                                <Form.Control required autoComplete={"off"}
                                              name={"quantity"}
                                              className={"text-white bg-dark"}
                                              type="text"
                                              placeholder="quantity"
                                              value={this.state.quantity}
                                              onChange={this.MedicineChange}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId={"from_balance"}>
                                <Form.Label>price</Form.Label>
                                <Form.Control required autoComplete={"off"}
                                              name={"price"}
                                              className={"text-white bg-dark"}
                                              type="text"
                                              placeholder="price"
                                              value={this.state.price}
                                              onChange={this.MedicineChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Prescription</Form.Label>
                                <Form.Control
                                    name={"prescription"}
                                    className={"text-white bg-dark"}
                                    type="checkbox"
                                    value={this.state.prescription}
                                    onChange={this.MedicineChange}
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