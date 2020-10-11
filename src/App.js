import React from 'react';
import './App.css';
import {NavigationBar} from './components/NavigationBar';
import {Container, Row, Col} from "react-bootstrap";
import {Welcome} from "./components/Welcome";
import {Cashier} from "./services/Cashier";
import {CashierList} from "./services/CashierList";
import {CustomerList} from "./services/CustomerList";
import {DoctorList} from "./services/DoctorList";
import {DoctorCustomerList} from "./services/DoctorCustomerList";
import {MedicineList} from "./services/MedicineList";
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
                        <Route  path={"/welcome"} exact component={Welcome}/>
                        <Route  path={"/cashier"} exact component={Cashier}/>
                        <Route  path={"/cashierList"} exact component={CashierList}/>
                        <Route  path={"/customerList"} exact component={CustomerList}/>
                        <Route  path={"/doctorList"} exact component={DoctorList}/>
                        <Route  path={"/medicineList"} exact component={MedicineList}/>
                        <Route  path={"/custdocList"} exact component={DoctorCustomerList}/>

                    </Switch>
                </Col>
            </Row>
        </Container>
        <Footer/>
  </Router>
  );
}

export default App;
