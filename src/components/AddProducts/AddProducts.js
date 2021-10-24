
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';

const AddProducts = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();
    const handleAddProduct = e => {
        const name= nameRef.current.value;
        const price= priceRef.current.value;
        const quantity= quantityRef.current.value;
        const newProduct = {name,price,quantity}
        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Successfully Added Product');
                e.target.reset();
            }
        })
        e.preventDefault();
    }


    return (
        <div className="mx-auto mt-5 w-50 text-left">
            <Form onSubmit={handleAddProduct} className=" border p-3">
                <h3 className="text-center my-3">Please!! Add a Products</h3>
                <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} placeholder="Enter Product Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="text" ref={priceRef} placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Product Quantity</Form.Label>
                    <Form.Control type="number" ref={quantityRef} placeholder="Quantity" />
                </Form.Group>
                <button className="btn btn-primary" type="submit">
                    Add Products
                </button>
            </Form>
        </div>
    );
};

export default AddProducts;