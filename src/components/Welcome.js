import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export class Welcome extends React.Component{
    render() {
        return (
            <Jumbotron className={"bg-dark text-white"}>
                <h1>Welcome!</h1>
                <p>
                    This is a simple drug store.
                </p>
            </Jumbotron>
        );
    }
}