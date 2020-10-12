import React from "react";
import {Card, Form, Button, Col} from "react-bootstrap";
import axios from 'axios'


export class Doctor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name:'',surname:''}
        this.doctorChange = this.doctorChange.bind(this);
        this.submitDoctor = this.submitDoctor.bind(this);
    }

    doctorChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })

    }

    //arrow function that builds JSON that we can put into post request
    submitDoctor = event => {
        const DoctorConstant={
            name:  this.state.name,
            surname: this.state.surname,
        };

        event.preventDefault();

        axios.post("http://localhost:8087/api/doctor/post/",DoctorConstant)
            .then(response=>{
                if(response.data != null){
                    alert("new Doctor added!");
                }
            });
    };

    render() {
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    Add Doctor
                </Card.Header>
                <Card.Body className={"bg-dark"}>
                    <Form onSubmit={this.submitDoctor} id={"customerFormID"}>
                        <Form.Row>
                            <Form.Group as={Col} controlId={"from_customerName"}>
                                <Form.Label>Doctor Name</Form.Label>
                                <Form.Control required autoComplete={"off"}
                                              name={"name"}
                                              className={"text-white bg-dark"}
                                              type="text"
                                              placeholder="Doctor name"
                                              value={this.state.name}
                                              onChange={this.doctorChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId={"from_customerSurname"}>
                                <Form.Label>Doctor surname</Form.Label>
                                <Form.Control required autoComplete={"off"}
                                              name={"surname"}
                                              className={"text-white bg-dark"}
                                              type="text"
                                              placeholder="Doctor surname"
                                              value={this.state.surname}
                                              onChange={this.doctorChange}
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
