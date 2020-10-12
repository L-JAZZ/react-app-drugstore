import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

export class NavigationBar extends React.Component {
  render() {
    return(
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Drugstore</Navbar.Brand>
        <Nav className="mr-auto">
            <Link to={"/doctor"} className={"nav-link"}>Add doctors</Link>
            <Link to={"/customer"} className={"nav-link"}>Add customers</Link>
            <Link to={"/cashier"} className={"nav-link"}>Add cashiers order</Link>
            <Link to={"/medicine"} className={"nav-link"}>Add medicine</Link>
            <Link to={"/custdoc"} className={"nav-link"}>Add Hospital record</Link>
            <Link to={"/doctorList"} className={"nav-link"}>doctorsList</Link>
            <Link to={"/customerList"} className={"nav-link"}>customersList</Link>
            <Link to={"/cashierList"} className={"nav-link"}>cashierList</Link>
            <Link to={"/medicineList"} className={"nav-link"}>medicineList</Link>
            <Link to={"/custdocList"} className={"nav-link"}>Hospital List</Link>
        </Nav>
      </Navbar>
    );
  }
}
