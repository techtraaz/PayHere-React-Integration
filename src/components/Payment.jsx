import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Payment() {
    const location = useLocation();
    const { oId, amount, item, hash } = location.state;

    console.log(hash)

    return (
        <div>
            <h1>Payment Form</h1>
            <form method="post" action="https://sandbox.payhere.lk/pay/checkout">
                {/* Hidden inputs */}
                <input type="hidden" name="merchant_id" value="1229892" />
                <input type="hidden" name="return_url" value="http://localhost:5173/" />
                <input type="hidden" name="cancel_url" value="http://localhost:5173/" />
                <input type="hidden" name="notify_url" value="https://e8c6-45-121-91-19.ngrok-free.app/notify-payment" />
                <input type="hidden" name="order_id" value={oId} />
                <input type="hidden" name="items" value={item} />
                <input type="hidden" name="currency" value="LKR" />
                <input type="hidden" name="amount" value={amount} />
                <input type="hidden" name="hash" value={hash} />

                {/* Customer Details */}
                <div>
                    <input type="text" name="first_name" placeholder="First Name" required />
                    <input type="text" name="last_name" placeholder="Last Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="text" name="phone" placeholder="Phone" required />
                    <input type="text" name="address" placeholder="Address" required />
                    <input type="text" name="city" placeholder="City" required />
                     <input type="text" name="country" placeholder='Country' required />
                </div>

                <button type="submit">Pay Now</button>
            </form>
        </div>
    );
} 