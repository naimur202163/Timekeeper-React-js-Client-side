import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from './../../../hooks/useAuth';
import { Button } from 'react-bootstrap';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { user, registerUser } = useAuth()
    // const { registerUser } = useFirebase()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleLoginSubmit} >
                {/* <input style={{ width: "40%" }}
                    id="inputPassword6"
                    className="form-control"
                    name="name"
                    type="name"
                    onBlur={handleOnBlur}
                    placeholder="Enter Your Name"
                /> */}
                <input style={{ width: "40%" }}
                    className="form-control"
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    placeholder="Enter Your email"
                />
                <input style={{ width: "40%" }}
                    type="password"
                    className="form-control"
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    placeholder="Enter Your PassWord"
                />
                <input style={{ width: "40%" }}
                    type="password"
                    className="form-control"
                    type="password"
                    name="password2"
                    onBlur={handleOnBlur}
                    placeholder="Re-typePassword"
                />
                <Button type="submit" >Submit</Button>
            </form>
            <Button >Google</Button>
        </div>
    );
};

export default Register;