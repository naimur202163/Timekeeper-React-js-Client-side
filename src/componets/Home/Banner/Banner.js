import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="row my-5 ">
                <div className="col-lg-6 col-sm-12  my-5 ">
                    <h2 className="text-center my-4">The Stone <span className="info">Series</span> </h2>
                    <h3 className="text-center  my-3">Great Leather Collection</h3>
                    <p className="text-end my-2">It has survived not only five survived not five survived only  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <img className="img-fluid" src='https://image.freepik.com/free-photo/portrait-unsatisfied-young-man-pointing-finger_171337-9309.jpg' />

                </div>
            </div>

        </div>
    );
};

export default Banner;