import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="container my-5">
            <h2 data-aos="zoom-in" className="text-muted my-4">Latest Blogs</h2>
            <hr />
            <Row>
                <Col sm={12} lg={4}>
                    <div data-aos="zoom-in-up" >
                        <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0039/3740/2989/articles/1_536x345_crop_center.jpg?v=1559111690" alt="" />
                        <h5 className="text-muted my-2 ">Best Fashion Smartwatch Collection</h5>
                        <p className="text-muted">Timekeeper demo Admin</p>
                    </div>
                </Col>
                <Col sm={12} lg={4}>
                    <div data-aos="zoom-in-up">
                        <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0039/3740/2989/articles/6_536x345_crop_center.jpg?v=1559116959" alt="" />
                        <h5 className="text-muted my-2 ">Vitae alias ullam voluptatibus </h5>
                        <p className="text-muted">Timekeeper demo Admin</p>
                    </div>
                </Col>
                <Col sm={12} lg={4}>
                    <div data-aos="zoom-in-up">
                        <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0039/3740/2989/articles/8_536x345_crop_center.jpg?v=1559117030" alt="" />
                        <h5 className="text-muted my-2 ">Bounted Tropical Plant Care: How  </h5>
                        <p className="text-muted">Timekeeper demo Admin</p>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default Blogs;