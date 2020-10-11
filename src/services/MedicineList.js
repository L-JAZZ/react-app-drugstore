import React from "react";
import {Button, Card, Table} from "react-bootstrap";
import axios from 'axios'
import ButtonGroup from "react-bootstrap/ButtonGroup";


export class MedicineList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            medicine:[]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8088/api/medicine/')
            .then(response=>response.data)
            .then((data)=>{
                this.setState({medicine:data});
            });

    }

    render() {
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    Medicine list
                </Card.Header>
                <Card.Body className={"bg-dark"}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Medicine ID</th>
                            <th>name</th>
                            <th>price</th>
                            <th>Prescription</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.medicine.map((medicine)=>(
                                <tr key={medicine.id}>
                                    <td>{medicine.id}</td>
                                    <td>{medicine.medName}</td>
                                    <td>{medicine.price}</td>
                                    <td>{medicine.prescription.toString()}</td>
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