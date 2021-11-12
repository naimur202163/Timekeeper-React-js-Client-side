import React from 'react';
import { useForm } from "react-hook-form";
const AddProducts = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch("http://localhost:5000/addproduct", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));



    }








    return (
        <div>
            <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
                <label for="formFile" className="form-label text-muted">Add A Product</label>
                <input style={{ width: "30%%" }} className="form-control" type="file" id="formFile" />
                <input placeholder=" title" style={{ width: "30%" }} type="text" {...register("title")} />
                <br />
                <br />
                <input placeholder=" Name" style={{ width: "30%" }} type="text" {...register("name", { required: true })} />
                <br />
                <br />
                <input placeholder=" Discription" style={{ width: "30%" }} type="text" {...register("discription", { required: true })} />
                <br />
                <br />
                <input placeholder=" price" style={{ width: "30%" }} type="number" {...register("price", { required: true })} />
                <br />
                <br />
                <input defaultValue="https://cdn.shopify.com/s/files/1/0039/3740/2989/products/product-7_64ebb11e-7449-494b-9e70-3267dab4895b_600x800_crop_center.jpg?v=1559117266" placeholder=" price" style={{ width: "30%" }} type="text" {...register("img", { required: true })} />
                <br />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>

        </div>
    );
};

export default AddProducts;