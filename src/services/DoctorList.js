import React from "react";
import {Button, Card, Table} from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from 'axios'
import {Link} from "react-router-dom";


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

    delete=(id)=>{
        axios.delete('http://localhost:8087/api/doctor/deleteByID/'+id)
        .then(response=> {
                if (response.data != null) {
                    alert("Deleting custdoc with id:" + id);
                    this.setState({
                        doctor: this.state.doctor.filter(doctor=>doctor.id !== id)
                    })
                }
            }
        )
    };

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
                                        <Button onClick={this.delete.bind(this, doctor.id)} size={"sm"} variant="danger" type="submit">
                                            Delete
                                        </Button>
                                        <Link to={"editDoctor/" + doctor.id} className={"btn btn-sm btn-success"}>Edit</Link>
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
