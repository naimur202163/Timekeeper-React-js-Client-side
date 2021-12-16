import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const DownBanner = () => {
    return (
        <div className="container">
            <div>
                <Row>
                    <Col className="my-3" lg={6} sm={12}>
                        <div data-aos="fade-up-right" >
                            <p className="text-muted  my-1">SPECIAL OFFER</p>
                            <h2 className="text-muted my-2">SUCCULENT GARDEN</h2>
                            <h1 className="text-muted my-3">GIFT BOXES</h1>
                            <p className="text-muted my-4">From planter materials to style options, discover which planter is best for your space.</p>
                            <Button className="text-muted btn-info p-3">Explore The Shop</Button>
                        </div>
                    </Col>
                    <Col className="my-3" lg={6} sm={12}>
                        <img data-aos="fade-up-left" className="img-fluid" src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/694x424_e23c122a-8d28-40ec-ba10-87e28f07c2ba.jpg?v=1559383318" alt="" />
                    </Col>
                </Row>
            </div>
        </div >
    );
};

export default DownBanner;