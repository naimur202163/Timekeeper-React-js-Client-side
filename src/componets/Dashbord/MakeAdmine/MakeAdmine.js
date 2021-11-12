import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MakeAdmine = () => {
    const [email, setEmail] = useState('');
    const user = { email }
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('')
                    setSuccess(true);
                }
            })




        e.preventDefault()
    }
    return (

        <div>
            <h2>make An Admin</h2>

            <form onSubmit={handleAdminSubmit}>
                <input style={{ width: "80%" }}
                    className="form-control my-3"
                    name="email"
                    type="email"
                    placeholder="Enter Your email"
                    onBlur={handleOnBlur}

                />
                <Button className="btn-info" type="submit" variant="contained">Make Admin</Button>
            </form>
            <div className="my-4">
                {success && <div className="alert alert-secondary" role="alert">
                    Admin Added SuccessFully
                </div>}
            </div>

        </div >
    );
};

export default MakeAdmine;