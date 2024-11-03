import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the totalAmount from the navigation state
  const { state } = location;
  const totalAmount = state?.totalAmount;

  // If totalAmount is not available, redirect back to the Advertiser form
  React.useEffect(() => {
    if (totalAmount === undefined) {
      navigate('/Advertiser');
    }
  }, [totalAmount, navigate]);

  const handlePayment = () => {
    // Implement your payment processing logic here
    // For example, integrate with Stripe, PayPal, etc.

    // After successful payment, you might want to redirect to a confirmation page
    alert(`Payment of $${totalAmount} successful!`);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-custom-image2 bg-cover bg-center flex items-center justify-center">
      <div className="max-w-md bg-white bg-opacity-90 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Payment Page</h2>
        {totalAmount !== undefined ? (
          <>
            <p className="mb-4 text-center">
              <strong>Total Amount:</strong> ${totalAmount}
            </p>
            {/* Payment Button */}
            <button
              onClick={handlePayment}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            >
              Proceed to Payment
            </button>
          </>
        ) : (
          <p className="text-center text-red-500">No payment details found.</p>
        )}
      </div>
    </div>
  );
};

export default Payment;
