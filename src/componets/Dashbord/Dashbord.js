import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AdmineRoute from './AdmineRoute/AdmineRoute';
import { Button, Col, Row, Nav } from 'react-bootstrap';
import MakeAdmine from './MakeAdmine/MakeAdmine';
import useAuth from '../../hooks/useAuth';

const Dashbord = () => {
    const { admin } = useAuth()
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h2>This is Dashbord</h2>
            <Row>
                <Col lg={4} sm={12}>  <ul className="nav flex-column">
                    {/* <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link> */}
                    <Nav.Link as={Link} to="/ourservices">Our Services</Nav.Link>
                    {admin &&
                        <div>
                            <Nav.Link as={Link} to={`${url}/makeAdmin`}>Make An Admin</Nav.Link>
                            <Nav.Link as={Link} to={`${url}/addprdudcts`}>Add Products</Nav.Link>
                        </div>


                    }

                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul></Col>
                <Col sm={12} lg={8}>
                    <Switch>
                        <Route exact path={path}>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmine></MakeAdmine>
                        </Route>

                    </Switch>
                </Col>
            </Row>



        </div>
    );
};

export default Dashbord;