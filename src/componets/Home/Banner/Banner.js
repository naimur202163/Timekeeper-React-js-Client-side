import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="row my-5 ">
                <div className="col-lg-6 col-sm-12  my-5 ">
                    <h1 className="text-center my-4 text-muted">The Stone <span className="text-info">Series</span> </h1>
                    <h2 className="text-center  my-3 text-muted"> <span className="text-info"> Great </span> Leather Collection</h2>
                    <p className="text-end my-2 text-muted">It has<span className="text-info"> survived </span> not only five survived not five survived only  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <img className="img-fluid" src='https://image.freepik.com/free-photo/portrait-unsatisfied-young-man-pointing-finger_171337-9309.jpg' />

                </div>
            </div>

        </div>
    );
};

export default Banner;