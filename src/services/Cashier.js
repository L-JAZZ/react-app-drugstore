import React from "react";
import {Card} from "react-bootstrap";


export class Cashier extends React.Component {
    render() {
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    Add cashier's order
                </Card.Header>
                <Card.Body className={"bg-dark"}>

                </Card.Body>
            </Card>
        );
    }
}