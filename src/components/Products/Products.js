import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete');
        if(proceed){
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0){
                    alert('Delted Successfully');
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
                }
            })
        }
    }
    return (
        <div className="w-75 mx-auto">
            <h2>There are <span className="text-primary">{products.length}</span> Product available </h2>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    products.map(product => <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>
                                <Link to={`/products/update/${product._id}`}><button className="btn btn-primary">Update</button></Link>
                                <button onClick={() => handleDelete(product._id)} className="btn btn-danger ms-2">Delete</button>
                            </td>
                            
                        </tr>
                        
                        
                        
                    )}
                
                        
                </tbody>
            </Table>
        </div>
    );
};

export default Products;