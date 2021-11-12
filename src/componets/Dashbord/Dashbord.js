import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button, Col, Row, Nav } from 'react-bootstrap';
import MakeAdmine from './MakeAdmine/MakeAdmine';
import useAuth from '../../hooks/useAuth';
import AddProducts from './AddProducts/AddProducts';
import MangeProducts from './MangeProducts/MangeProducts';
import Footer from '../Home/Footer/Footer';

const Dashbord = () => {
    const { admin } = useAuth()
    let { path, url } = useRouteMatch();
    return (
        <div>
            <hr />
            <h1 className="text-center text-muted"> Dashbord</h1>
            <hr />
            <Row>
                <Col lg={4} sm={12}>  <ul className="nav flex-column">
                    {/* <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link> */}
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>

                    <Nav.Link as={Link} to="/ourservices">Our Services</Nav.Link>
                    <Nav.Link as={Link} to="/userorders">My-orders</Nav.Link>
                    {admin &&
                        <div>
                            <Nav.Link as={Link} to={`${url}/makeAdmin`}>Make An Admin</Nav.Link>
                            <Nav.Link as={Link} to={`${url}/addproduct`}>Add Products</Nav.Link>
                            <Nav.Link as={Link} to={`${url}/mangeproducts`}>Manage Products</Nav.Link>
                        </div>


                    }


                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>

                </ul></Col>
                <Col sm={12} lg={8}>
                    <Switch>
                        <Route exact path={path}>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmine></MakeAdmine>
                        </Route>
                        <Route path={`${path}/addproduct`}>
                            <AddProducts></AddProducts>
                        </Route>
                        <Route path={`${path}/mangeproducts`}>
                            <MangeProducts></MangeProducts>
                        </Route>

                    </Switch>
                </Col>
            </Row>


            <Footer></Footer>
        </div>
    );
};

export default Dashbord;