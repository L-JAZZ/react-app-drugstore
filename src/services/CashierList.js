import React from "react";
import {Button, Card, Table} from "react-bootstrap";
import axios from 'axios'
import ButtonGroup from "react-bootstrap/ButtonGroup";


export class CashierList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            cashier:[]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8091/api/cashier/get')
            .then(response=>response.data)
            .then((data)=>{
                this.setState({cashier:data});
            });

    }

    delete=(id)=>{
        axios.delete('http://localhost:8091/api/cashier/delete/'+id)
        .then(response=> {
                if (response.data != null) {
                    alert("Deleting cashier with id:" + id);
                    this.setState({
                        cashier: this.state.cashier.filter(cashier=>cashier.id !== id)
                    })
                }
            }
        )
    };

    render() {
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    Cashier orders list
                </Card.Header>
                <Card.Body className={"bg-dark"}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>order ID</th>
                                <th>Medicine ID</th>
                                <th>Customer name</th>
                                <th>Customer surname</th>
                                <th>Customer ID</th>
                                <th>Medicine name</th>
                                <th>response</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.cashier.map((cashier)=>(
                                <tr key={cashier.id}>
                                    <td>{cashier.id}</td>
                                    <td>{cashier.medicineId}</td>
                                    <td>{cashier.custName}</td>
                                    <td>{cashier.custSurname}</td>
                                    <td>{cashier.customerId}</td>
                                    <td>{cashier.medName}</td>
                                    <td>{cashier.result}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button onClick={this.delete.bind(this, cashier.id)} size={"sm"} variant="danger" type="submit">
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
