import React, { useState } from 'react';
import './App.css';

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [error, setError] = useState('');

  const handleBillAmountChange = (e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      setError('Bill amount must be a number');
    } else {
      setError('');
      setBillAmount(value);
    }
  };

  const handleTipPercentageChange = (e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      setError('Tip percentage must be a number');
    } else {
      setError('');
      setTipPercentage(value);
    }
  };

  const calculateTip = () => {
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercentage);
    if (!isNaN(bill) && !isNaN(tip)) {
      return (bill * (tip / 100)).toFixed(2);
    }
    return '0.00';
  };

  const calculateTotal = () => {
    const bill = parseFloat(billAmount);
    const tip = parseFloat(calculateTip());
    if (!isNaN(bill) && !isNaN(tip)) {
      return (bill + tip).toFixed(2);
    }
    return '0.00';
  };

  return (
    <div className="app">
      <div className="calculator">
        <h1>Tip Calculator</h1>
        <div className="input-group">
          <label htmlFor="billAmount">Bill Amount (₹)</label>
          <input
            type="text"
            id="billAmount"
            value={billAmount}
            onChange={handleBillAmountChange}
            placeholder="Enter bill amount"
          />
        </div>
        <div className="input-group">
          <label htmlFor="tipPercentage">Tip Percentage (%)</label>
          <input
            type="text"
            id="tipPercentage"
            value={tipPercentage}
            onChange={handleTipPercentageChange}
            placeholder="Enter tip percentage"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="output-group">
          <p>Tip Amount: ₹{calculateTip()}</p>
          <p>Total Bill: ₹{calculateTotal()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
