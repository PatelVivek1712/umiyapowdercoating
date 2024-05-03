// InvoiceGeneration.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

function InvoiceGeneration() {
  const { category, color } = useParams();
  const [invoiceDetails, setInvoiceDetails] = useState(null);

  useEffect(() => {
    fetchInvoiceDetails();
  }, []);

  const fetchInvoiceDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/generate-invoice/${category}/${color}`);
      if (!response.ok) {
        throw new Error('Failed to fetch invoice details');
      }
      const data = await response.json();
      setInvoiceDetails(data);
    } catch (error) {
      console.error('Error fetching invoice details:', error);
    }
  };

  return (
    <div>
      <NavBar />
      <h1>Invoice Details</h1>
      {invoiceDetails && (
        <div>
          <p>Category: {invoiceDetails.category}</p>
          <p>Color: {invoiceDetails.color}</p>
          {/* Add other invoice details here */}
        </div>
      )}
    </div>
  );
}

export default InvoiceGeneration;
