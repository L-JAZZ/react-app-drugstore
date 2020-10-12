import React from "react";
import {Button, Card, Table} from "react-bootstrap";
import axios from 'axios'
import ButtonGroup from "react-bootstrap/ButtonGroup";


export class DoctorCustomerList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            custdoc:[]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8090/api/custdoc/')
            .then(response=>response.data)
            .then((data)=>{
                this.setState({custdoc:data});
            });
    }

    delete=(id)=>{
        axios.delete('http://localhost:8090/api/custdoc/delete/'+id)
        .then(response=> {
                if (response.data != null) {
                    alert("Deleting custdoc with id:" + id);
                    this.setState({
                        custdoc: this.state.custdoc.filter(custdoc=>custdoc.customerID !== id)
                    })
                }
            }
        )
    };

    render() {
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    Hospital List
                </Card.Header>
                <Card.Body className={"bg-dark"}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>

                            <th>record ID</th>
                            <th>Customer name</th>
                            <th>Customer surname</th>
                            <th>Doctor ID</th>
                            <th>Doc Name</th>
                            <th>Doc Surname</th>
                            <th>Prescription</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.custdoc.map((custdoc)=>(
                                <tr key={custdoc.customerID}>
                                    <td>{custdoc.customerID}</td>
                                    <td>{custdoc.customerName}</td>
                                    <td>{custdoc.customerSurname}</td>
                                    <td>{custdoc.doctorID}</td>
                                    <td>{custdoc.docName}</td>
                                    <td>{custdoc.docSurname}</td>
                                    <td>{custdoc.prescription.toString()}</td>
                                    <td>
                                        <ButtonGroup>
                                        <Button onClick={this.delete.bind(this, custdoc.customerID)} size={"sm"} variant="danger" type="submit">
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
