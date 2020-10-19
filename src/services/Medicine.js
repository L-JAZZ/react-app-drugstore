import React from "react";
import {Card, Form, Button, Col} from "react-bootstrap";
import axios from 'axios'


export class Medicine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {id:'',medName:'',quantity:'',price:'',prescription:''}
        this.MedicineChange = this.MedicineChange.bind(this);
        this.submitMedicine = this.submitMedicine.bind(this);
    }

    componentDidMount() {
        const medicineID = this.props.match.params.id;
        if(medicineID){
            axios.get('http://localhost:8088/api/medicine/id/' + medicineID)
                .then(response =>{
                    if(response.data != null){
                        this.setState({
                            medName:response.data.medName,
                            quantity:response.data.quantity,
                            price:response.data.price,
                            prescription:response.data.prescription,
                        });
                    }

                }).catch((error)=>{
                console.error("error" + error)
            });
        }
    }

    MedicineChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    updateMedicine = event => {
        const MedicineConstant={
            id: this.state.id,
            medName:  this.state.medName,
            quantity: this.state.quantity,
            price: this.state.price,
            prescription: this.state.prescription
        };

        event.preventDefault();

        axios.put("http://localhost:8088/api/medicine/update/"+this.state.id,MedicineConstant)
            .then(response=>{
                if(response.data != null){
                    alert("Updated!");
                }
            });
    };

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
                    <Form onSubmit={this.state.id ? this.updateMedicine : this.submitMedicine} id={"customerFormID"}>
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
                            {this.props.match.params.id ? "Update" : "Submit"}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}