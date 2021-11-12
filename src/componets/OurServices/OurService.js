import React, { useEffect, useState } from 'react';
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Order from './../Order/Order';
import Footer from './../Home/Footer/Footer';
const OurService = () => {
    const [products, setProducts] = useState([])


    // Loading data form mongodb

    useEffect(() => {
        const url = `https://pure-garden-91979.herokuapp.com/products`;
        fetch(url)
            .then(res => res.json())
            .then(resut => setProducts(resut))


    }, [])
    return (
        <div>
            <Header></Header>
            <div><h1 className="text-muted text-center my-5"> Our <span className="text-info"> Collection</span><br />
            </h1></div>
            <div className="row my-3">
                {
                    products.map(order =>
                        <div className="col-lg-6 col-sm-12 my-2 p-2">
                            <div className="card mb-3" style={{ "max - width": "540px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={order.img} className="img-fluid rounded-start mt-3  ms-2" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 className="card-title">{order.name}</h5>
                                            <h6 className="card-title my-1">{order.subname}</h6>
                                            <p className="card-text my-1">{order.discription}</p>
                                            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            <p className="card-text"><small class="text-muted"> {order.price}$</small></p>
                                            <Link to={`/order/${order._id}`}>
                                                <Button onClick variant="btn btn-info">Bye Now</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OurService;