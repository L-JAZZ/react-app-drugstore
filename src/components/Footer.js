import React from "react";
import {Col, Container, Navbar} from "react-bootstrap";

export class Footer extends React.Component{
    render() {
        return (
            <Navbar fixed={"bottom"} bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className={"text-center text-muted"}>
                        <div>
                            Drugstore
                        </div>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}