import React from "react";
import {Button, Card, Table} from "react-bootstrap";
import axios from 'axios'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {Link} from "react-router-dom";


export class CustomerList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            customer:[]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8086/api/customer/')
            .then(response=>response.data)
            .then((data)=>{
                this.setState({customer:data});
            });

    }

    delete=(id)=>{
        axios.delete('http://localhost:8086/api/customer/deleteByID/'+id)
        .then(response=> {
                if (response.data != null) {
                    alert("Deleting customer with id:" + id);
                    this.setState({
                        customer: this.state.customer.filter(customer=>customer.id !== id)
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
                            <th>Customer ID</th>
                            <th>balance</th>
                            <th>Customer name</th>
                            <th>Customer surname</th>
                            <th>Prescription</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.customer.map((customer)=>(
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.balance}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.surname}</td>
                                    <td>{customer.prescription.toString()}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button onClick={this.delete.bind(this, customer.id)} size={"sm"} variant="danger" type="submit">
                                                Delete
                                            </Button>
                                            <Link to={"editCustomer/"+customer.id} className={"btn btn-sm btn-success"}>Edit</Link>
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
