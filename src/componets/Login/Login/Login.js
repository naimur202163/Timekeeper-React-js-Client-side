import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
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
        <div>
            <Row>
                <Col >
                    <form onSubmit={handleLoginSubmit} >

                        <input style={{ width: "40%" }}
                            className="form-control"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            placeholder="Enter Your email"
                        />
                        <input style={{ width: "40%" }}
                            type="password"
                            className="form-control"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            placeholder="Enter Your PassWord"
                        />

                        <Button type="submit" >Submit</Button>
                    </form>
                </Col>
            </Row>

        </div>






    );
};

export default Login;