import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

export class NavigationBar extends React.Component {
  render() {
    return(
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/welcome">Drugstore</Navbar.Brand>
        <Nav className="mr-auto">
            <Link to={"/doctors"} className={"nav-link"}>doctors</Link>
            <Link to={"/doctorsList"} className={"nav-link"}>doctorsList</Link>
            <Link to={"/customers"} className={"nav-link"}>customers</Link>
            <Link to={"/customersList"} className={"nav-link"}>customersList</Link>
            <Link to={"/cashier"} className={"nav-link"}>cashier</Link>
            <Link to={"/cashierList"} className={"nav-link"}>cashierList</Link>
            <Link to={"/medicine"} className={"nav-link"}>medicine</Link>
            <Link to={"/medicineList"} className={"nav-link"}>medicineList</Link>

        </Nav>
      </Navbar>
    );
  }
}