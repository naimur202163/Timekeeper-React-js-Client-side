import React, { useEffect, useState } from 'react';
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Services = () => {

    const [products, setProducts] = useState([])


    // Loading data form mongodb

    // Slice the Obejects

    const productss = products.slice(5, 11);
    console.log(productss)

    useEffect(() => {
        const url = `https://pure-garden-91979.herokuapp.com/products`;
        fetch(url)
            .then(res => res.json())
            .then(resut => setProducts(resut))


    }, [])
    return (
        <div className="container">
            <h2 className="text-muted" >This is Our Services</h2>
            {/* Part-1 */}
            <hr />




            {/* Part-2 */}
            <div className="my-5">
                <Container >
                    <Row >
                        {
                            productss?.map(product =>
                                <div class="col-sm-12 col-lg-4 my-2 ">
                                    <div data-aos="fade-up" class="card">
                                        <div><img style={{ width: "100%" }} className="rounded mx-auto d-block mt-4" src={product.img} /></div>
                                        <div class="card-body">
                                            <h5 class="card-title text-muted">{product.name}</h5>
                                            <h4 class="card-title text-muted">{product.price}$</h4>

                                            <p class="card-text">{product.discription.slice(20)}</p>
                                            {/* <Link to={`/orderdetails/${product._id}`}>
                                            <button className="btn btn-success m-2">update</button>
                                        </Link> */}
                                            <Link to={`/order/${product._id}`}>
                                                <button className="btn btn-success m-2">Order Now</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Row>



                </Container>

            </div>
        </div >
    );
};

export default Services;


