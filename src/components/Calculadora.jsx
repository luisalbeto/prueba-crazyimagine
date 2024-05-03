import React, { useState } from 'react';

const TipCalculator = () => {

  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(15);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  {/*FUNCION PARA INDICAR EL MONTO DE LA CUENTA*/}

  const handleBillAmountChange = (event) => {
    const newBillAmount = parseFloat(event.target.value);
    setBillAmount(newBillAmount);
    calculateTipAndTotal();
  };

{/*FUNCION PARA CAMBIAR EL PORCENTAJE DE LA PROPINA*/}

  const handleTipPercentageChange = (event) => {
    const newTipPercentage = parseInt(event.target.value);
    setTipPercentage(newTipPercentage);
    calculateTipAndTotal();
  };

  {/*FUNCION PARA CALCULAR EL MONTO DE LA CUENTA + PROPINA*/}


  const calculateTipAndTotal = () => {
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;
    setTipAmount(tipAmount.toFixed(2));
    setTotalAmount(totalAmount.toFixed(2));
  };

  return (
    <div className="container mx-auto mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Calculadora de Propinas</h2>

      <div className="mt-4 flex flex-col items-center">
        <label htmlFor="billAmount" className="block text-gray-700 mb-2">
          Monto Cuenta:
        </label>
        <input
          type="number"
          id="billAmount"
          value={billAmount}
          onChange={handleBillAmountChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="mt-4 flex flex-col items-center">
          <label htmlFor="tipPercentage" className="block text-gray-700 mb-2">
            Porcentaje de propina (%):
          </label>
          <input
            type="number"
            id="tipPercentage"
            value={tipPercentage}
            onChange={handleTipPercentageChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-row justify-between">
        <div className="text-gray-700 font-bold">Monto Propina:</div>
        <div className="text-gray-700 font-bold">
          ${tipAmount}
        </div>
      </div>

      <div className="mt-2 flex flex-row justify-between">
        <div className="text-gray-700 font-bold">Monto Total:</div>
        <div className="text-gray-700 font-bold">
          ${totalAmount}
        </div>
      </div>
      </div>
      
)}

export default TipCalculator;