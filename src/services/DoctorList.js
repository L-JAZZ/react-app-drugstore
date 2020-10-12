import React from "react";
import {Button, Card, Table} from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from 'axios'


export class DoctorList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            doctor:[]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8087/api/doctor/')
            .then(response=>response.data)
            .then((data)=>{
                this.setState({doctor:data});
            });

    }

    render() {
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    Customers list
                </Card.Header>
                <Card.Body className={"bg-dark"}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Doctor ID</th>
                            <th>Doctor name</th>
                            <th>Doctor surname</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.doctor.map((doctor)=>(

                                <tr key={doctor.id}>

                                    <td>{doctor.id}</td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.surname}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button size={"sm"} variant="danger" type="submit">
                                                Delete
                                            </Button>
                                            <Button size={"sm"} variant="success" type="submit">
                                                Edit
                                            </Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}