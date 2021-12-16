import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';

const UserOrders = () => {
    const [products, setProducts] = useState([]);
    const [isDelete, setIsDelete] = useState(null);
    const { user } = useAuth()
    useEffect(() => {
        const url = `https://pure-garden-91979.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(result => setProducts(result))


    }, [isDelete]);



    // Delet 
    const handleDeleteProduct = (id) => {
        console.log(id);

        fetch(`https://pure-garden-91979.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount) {
                    setIsDelete(true);
                    alert('Do You want to Delet it')
                } else {
                    setIsDelete(false);
                }
            });
    };





    return (

        <div className="">
            <Header></Header>
            <h3 data-aos="zoom-out-right" className="text-center my-5 text-muted">My  <span className="text-info">Orders</span> </h3>
            <div className="row container">
                {
                    products.map(product => <div className="col-lg-6">
                        <div class="card mb-3">
                            <img data-aos="zoom-out-right" src={product.img} style={{ height: "400px" }} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">{product.discription}</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                <button onClick={() => handleDeleteProduct(product._id)} className="btn-info rounded ">Delet</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>




        </div>
    );
};

export default UserOrders;