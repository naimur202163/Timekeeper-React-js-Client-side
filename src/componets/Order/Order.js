import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";

const Order = () => {
    const [orders, setOrder] = useState([])
    const { productID } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();


    const { user } = useAuth()
    useEffect(() => {
        const url = `http://localhost:5000/products`;

        fetch(url)
            .then(res => res.json())
            .then(resut => setOrder(resut))


    }, []);



    const onSubmit = data => {
        fetch("http://localhost:5000/order", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(order[0]),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data)
    };





    // Sending data

    const handeleUser = () => {
        // console.log(data);

    }





    // Filtatring Producuts
    console.log(user)

    const order = orders?.filter(items => items._id == productID);






    return (
        <div>
            <div className="container">


                <div className="row">
                    <div className="col-lg-7 col-sm-12">
                        <div className="details my-5  justify-content-center">

                            <h2 className="text-secondary">{order[0]?.name}</h2>
                            <h4 className="text-secondary">{order[0]?.subname}</h4>
                            <hr />
                            <h3><img className="img-fluid img-rounded" src={order[0]?.img} /></h3>
                            <h3 className="text-muted">{order[0]?.type}</h3>
                            <h4 className="text-muted">Price : {order[0]?.price}$</h4>
                            <p>{order[0]?.discription}</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12 my-5" >
                        <div className="my-5">
                            <h2>Order Now</h2>
                            <div className="mx-auto my-5">
                                <div className="my-4">
                                    <h3>Customer:<span className="text-muted"> {user.email}</span></h3>
                                    <h3>Name:<span className="text-muted"> {user.displayName}</span></h3>
                                </div>
                                <div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input style={{ width: "50%" }} type="email" defaultValue={user.email} {...register("email")} />
                                        <br />
                                        <br />
                                        <input placeholder="Enter Your Name " style={{ width: "50%" }} type="name" {...register("name", { required: true })} />
                                        <br />
                                        {errors.exampleRequired && <span>This field is required</span>}
                                        <br />
                                        <input placeholder="Enter Your Phone Number" style={{ width: "50%" }} type="number" {...register("phone", { required: true })} />
                                        <br />
                                        <br />
                                        <input placeholder="Enter Your Address" style={{ width: "50%" }} type="text" {...register("phone", { required: true })} />
                                        <br />
                                        <br />
                                        <button style={{ width: "50%" }} className="btn-info">
                                            <input className="btn-info" type="submit" />

                                        </button>
                                        <button onClick={handeleUser}>H</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>



            </div >
        </div>
    );
};

export default Order;