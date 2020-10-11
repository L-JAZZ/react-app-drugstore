import React from "react";
import {Card, Table} from "react-bootstrap";


export class CashierList extends React.Component {
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
                        <tr align={"center"}>
                            <td colSpan={"7"}>empty list</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}