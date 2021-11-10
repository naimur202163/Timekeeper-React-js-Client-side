import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Order = () => {
    const [orders, setOrder] = useState([])
    const { productID } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/products`;

        fetch(url)
            .then(res => res.json())
            .then(resut => setOrder(resut))


    }, []);
    // Filtatring Producuts


    const order = orders?.filter(items => items._id == productID);






    return (
        <div>
            <h3>{order[0]?.name}</h3>
        </div>
    );
};

export default Order;