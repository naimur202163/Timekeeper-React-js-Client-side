import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, [])
    return (
        <div>
            <div className="row my-5 ">
                <div data-aos="fade-right" className=" col-lg-6 col-sm-12 my-5 ">
                    <h1 className="text-center my-4 text-muted">The Stone <span className="text-info">Series</span> </h1>
                    <h2 className="text-center  my-3 text-muted"> <span className="text-info"> Great </span> Leather Collection</h2>
                    <p className="text-end my-2 text-muted text-center">It has<span className="text-info"> survived </span> not only five survived not five survived only  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <img data-aos="fade-left" className="img-fluid" src='https://image.freepik.com/free-photo/portrait-unsatisfied-young-man-pointing-finger_171337-9309.jpg' />

                </div>
            </div>

        </div >
    );
};

export default Banner;