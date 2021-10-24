import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router';

const UpdateProducts = () => {
    
    const [product, setProduct] = useState({});
    const {id} = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);
    // console.log(product)

    // Update User
    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedProduct = { name: updatedName, price: product.price, quantity: product.quantity };
        setProduct(updatedProduct);
    }

    const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedProduct = { name: product.name, price: updatedPrice, quantity: product.quantity }
        setProduct(updatedProduct);
    }
    const handleQuantityChange = e => {
        const updatedQuantity = e.target.value;
        const updatedProduct = { name: product.name, price: product.price, quantity: updatedQuantity }
        setProduct(updatedProduct);
    }
    const handleUpdateUser = e => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setProduct({});
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div className="mx-auto mt-5 w-50 text-left">
            <Form onSubmit={handleUpdateUser} className=" border p-3">
                <h3 className="text-center my-3">Please!! Update {id}  Products</h3>
                <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" onChange={handleNameChange} value={product.name || ''} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="text" onChange={handlePriceChange} value={product.price || ''} />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Product Quantity</Form.Label>
                    <Form.Control type="number" onChange={handleQuantityChange} value={product.quantity || ''} />
                </Form.Group>
                <button className="btn btn-primary" type="submit">
                    Update Products
                </button>
            </Form>
        </div>
    );
};

export default UpdateProducts;