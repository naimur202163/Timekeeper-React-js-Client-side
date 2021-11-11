import React, { useEffect, useState } from 'react';
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Services = () => {

    const [products, setProducts] = useState([])


    // Loading data form mongodb

    useEffect(() => {
        const url = `http://localhost:5000/products`;
        fetch(url)
            .then(res => res.json())
            .then(resut => setProducts(resut))


    }, [])
    return (
        <div className="container">
            <h2>this is Services</h2>
            {/* Part-1 */}
            <hr />
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <div className="d-flex m-2">
                        <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/333_small.png?v=1559367618" alt="" />

                        <div>
                            <h3 className="m-2 p-1" >Free Shipping</h3>
                            <p className="m-2 p-1">Free shipping on order</p>
                        </div>

                    </div>

                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="d-flex">
                        <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/111_small.png?v=1559367608" alt="" />
                        <h3 className="m-2 p-1">Free Shipping</h3>
                        <p className="m-2 p-1">Free shipping on order</p>
                    </div>

                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="d-flex">
                        <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/222_small.png?v=1559367648" alt="" />
                        <h3 className="m-2 p-1">Payment Secure</h3>
                        <p className="m-2 p-1">Free shipping on order</p>
                    </div>


                </div>
            </div>




            {/* Part-2 */}
            <div className="my-5">
                <Container >
                    <Row >
                        {
                            products.map(product => <Col gap={1} className="my-3" sm={12} lg={4}>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img style={{ width: "auto", height: "15rem" }} variant="top" src={product.img} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>
                                            {product.subname}
                                        </Card.Text>
                                        <Card.Text>
                                            {product.price} $
                                        </Card.Text>
                                        <Link to={`/order/${product._id}`}>
                                            <Button onClick variant="primary">Bye Now</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>

                            </Col>)
                        }
                    </Row>



                </Container>

            </div>
        </div >
    );
};

export default Services;