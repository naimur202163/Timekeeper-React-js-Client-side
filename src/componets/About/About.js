import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';
import Header from '../Shared/Header/Header';

const About = () => {
    return (
        <div>
            <Header></Header>
            {/* Part-1 */}
            <Container className="my-5">
                <Row>
                    <Col sm={12} lg={6}>
                        <img className="img-fluid " src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/694x424_e23c122a-8d28-40ec-ba10-87e28f07c2ba.jpg?v=1559383318" alt="" />
                    </Col>
                    <Col sm={12} lg={6}>
                        <div>
                            <h1 className="text-muted">WELCOME TO<span className="text-warning">TIMEKEEPER</span> </h1>
                            <p className="text-muted">Timekeeper provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete account of the system, and expound the actual teachings of the eat explorer of the truth, the mer of human.</p>
                        </div>
                        <div className="my-5">
                            <h3 className="text-muted">WIN BEST ONLINE SHOP AT 2019</h3>
                            <p className="text-muted my-2">Timekeeper provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete account of the system, and expound the actual teachings of the eat explorer of the truth, the mer of human.</p>
                        </div>
                    </Col>

                </Row>
            </Container>
            {/* Part-2 */}
            <Container className="my-5">
                <Row>
                    <Col lg={4} sm={12}>
                        <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/3_large.jpg?v=1559450742" alt="" />
                        <h2>OUR VISSION</h2>
                        <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima</p>
                    </Col>
                    <Col lg={4} sm={12}>
                        <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/8_large.jpg?v=1559450776" alt="" />
                        <h2>OUR GOAL</h2>
                        <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima</p>
                    </Col>
                    <Col lg={4} sm={12}>
                        <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/1_large.jpg?v=1559450761" alt="" />
                        <h2>OUR MISSION</h2>
                        <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima</p>
                    </Col>

                </Row>
            </Container>
            {/* part-3 */}
            <Container className="my-5">
                <Row>
                    <Col lg={3} sm={12}>
                        <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/01_compact.png?v=1559450106" alt="" />
                    </Col>
                    <Col lg={3} sm={12}>
                        <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/02_compact.png?v=1559450120" alt="" />
                    </Col>
                    <Col lg={3} sm={12}>
                        <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/03_compact.png?v=1559450131" alt="" />
                    </Col>
                    <Col lg={3} sm={12}>
                        <img src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/04_compact.png?v=1559450141" alt="" />
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;