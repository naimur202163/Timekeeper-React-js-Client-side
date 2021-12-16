import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div >
            <Container>
                <hr />
                <Row>
                    <Col lg={4} sm={12}>
                        <div data-aos="fade-up" >
                            <img className="img-fluid my-3" style={{ width: "50%" }} src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/Timekeeper-b.png?v=1559116234" alt="" />

                            <h5 className="text-muted">Address</h5>
                            <p className="text-muted">4710-4890 Breckinridge St, UK Burlington, VT 05401</p>
                            <h5 className="text-muted my-4">Need Help?</h5>
                            <p className="text-muted" >Call: 1-800-345-6789</p>
                        </div>

                    </Col>
                    <Col lg={2} sm={12}>
                        <div data-aos="fade-up">
                            <h5 className="text-muted my-3">About Menu</h5>
                            <p className="text-muted">Home</p>
                            <p className="text-muted">Shop New</p>
                            <p className="text-muted">Product sale</p>
                            <p className="text-muted">Blog</p>
                            <p className="text-muted">Pages</p>
                        </div>
                    </Col>
                    <Col lg={2} sm={12}>
                        <div data-aos="fade-up">
                            <h5 className="text-muted my-3">Usefull Links</h5>
                            <p className="text-muted">Privacy Policy</p>
                            <p className="text-muted">Shop New</p>
                            <p className="text-muted">Retrund Policy</p>
                            <p className="text-muted">Promotions</p>
                            <p className="text-muted">faqs</p>
                        </div>
                    </Col>
                    <Col lg={4} sm={12}>
                        <div data-aos="fade-up">
                            <h4 className="text-muted my-3">  Latest Blogs</h4>
                            <div className="d-flex">
                                <div >
                                    <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/articles/1_100x80_crop_center.jpg?v=1559111690" alt="" />
                                </div>
                                <div className="ms-4 ">
                                    <h5 className="text-muted">Best Fashion Smartwatch Collection</h5>
                                    <p className="text-muted">Timekeeper demo Admin</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div data-aos="fade-up" >
                                    <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/articles/5_100x80_crop_center.JPG?v=1559116786" alt="" />
                                </div>
                                <div data-aos="fade-up" className="ms-4 ">
                                    <h5 className="text-muted">Nice Leather Watch Collection</h5>
                                    <p className="text-muted">Timekeeper demo Admin</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr />
                <p className="text-muted">Copyright © Timekeeper. All Right Reserved.</p>
            </Container>
        </div>
    );
};

export default Footer;