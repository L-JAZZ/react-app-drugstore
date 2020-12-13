import React from 'react';
import './App.css';
import {NavigationBar} from './components/NavigationBar';
import {Container, Row, Col} from "react-bootstrap";
import {Welcome} from "./components/Welcome";
import {Cashier} from "./services/Cashier";
import {CashierList} from "./services/CashierList";
import {CustomerList} from "./services/CustomerList";
import {Customer} from "./services/Customer";
import {DoctorList} from "./services/DoctorList";
import {Doctor} from "./services/Doctor";
import {DoctorCustomerList} from "./services/DoctorCustomerList";
import {DoctorCustomer} from "./services/DoctorCustomer";
import {MedicineList} from "./services/MedicineList";
import {Medicine} from "./services/Medicine";
import {Footer} from "./components/Footer";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {

    const marginTop ={
        marginTop:"20px"
    };

//поменять название cashier -> order
  return (
  <Router>
      <NavigationBar/>
        <Container>
            <Row>
                <Col lg={12} style={marginTop}>
                    <Switch>
                        <Route  path={"/"} exact component={Welcome}/>
                        <Route  path={"/cashier"} exact component={Cashier}/>
                        <Route  path={"/cashierList"} exact component={CashierList}/>
                        <Route  path={"/customerList"} exact component={CustomerList}/>
                        <Route  path={"/customer"} exact component={Customer}/>
                        <Route  path={"/editCustomer/:id"} exact component={Customer}/>
                        <Route  path={"/doctorList"} exact component={DoctorList}/>
                        <Route  path={"/doctor"} exact component={Doctor}/>
                        <Route  path={"/editDoctor/:id"} exact component={Doctor}/>
                        <Route  path={"/medicineList"} exact component={MedicineList}/>
                        <Route  path={"/medicine"} exact component={Medicine}/>
                        <Route  path={"/editMedicine/:id"} exact component={Medicine}/>
                        <Route  path={"/custdocList"} exact component={DoctorCustomerList}/>
                        <Route  path={"/custdoc"} exact component={DoctorCustomer}/>
                        <Route  path={"/editDoctorCustomer"} exact component={DoctorCustomer}/>
                    </Switch>
                </Col>
            </Row>
        </Container>
        <Footer/>
  </Router>
  );
}

export default App;
