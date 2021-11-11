import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import useAuth from './../../../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div >
            <Header></Header>
            <div className="text-muted text-center my-5"><h1>PLS  Login</h1></div>
            <Row>
                <Col >
                    <div className=" d-flex justify-content-center">
                        <form className="" onSubmit={handleLoginSubmit} >

                            <input style={{ width: "100%" }}
                                className="form-control my-4"
                                name="email"
                                type="email"
                                onChange={handleOnChange}
                                placeholder="Enter Your email"
                            />
                            <input style={{ width: "100%" }}
                                type="password"
                                className="form-control my-4"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                placeholder="Enter Your PassWord"
                            />

                            <Button className="btn-info " type="submit" >Login</Button>
                            <h4 className="text-muted my-4">Dont have Account pls <Link to="/register"> Resgister</Link></h4>
                        </form>

                    </div>

                </Col>
            </Row>

        </div>






    );
};

export default Login;