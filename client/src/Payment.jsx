import  { useState } from 'react';
import axios from 'axios';

const Payment = () => {
    const [amount, setAmount] = useState('');

    const handlePayment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/payment', { amount });
            window.location.href = response.data.payment_url;
        } catch (error) {
            console.error('Error initiating payment', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Instamojo Payment</h2>
            <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handlePayment}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
                Pay Now
            </button>
        </div>
    );
};

export default Payment;
