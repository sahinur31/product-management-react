import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link as={Link} to="/products">Products</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link as={Link} to="/products/add">Add Products</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
};

export default Home;