import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Checkout() {
    const navigate = useNavigate();
    const [orD, setorD] = useState({
        oId: '' , amount: '', item: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await axios.post('http://localhost:3001/generate-hash', {
            oId: orD.oId,
            totalAmount: orD.amount});

            // Navigate to payment form with data
        navigate('/payment', {
            state: {
                oId: orD.oId,amount: orD.amount,item: orD.item,
                hash: response.data.hash}});
    };

    return (
        <div>
            <h1>Checkout Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Order ID:</label>
                    <input
                        type="text" value={orD.oId}
                        onChange={(e) => setorD({...orD, oId: e.target.value})}
                    />
                </div>
                <div>
                    <label>Amount:</label>
                    <input
                        type="number" value={orD.amount}
                        onChange={(e) => setorD({...orD, amount: e.target.value})}
                    />
                </div>
                <div>
                    <label>item:</label>
                    <input
                        type="text" value={orD.item}
                        onChange={(e) => setorD({...orD, item: e.target.value})}
                    />
                </div>
                <button type="submit">Proceed to Payment</button>
            </form>
        </div>
    );
} 

