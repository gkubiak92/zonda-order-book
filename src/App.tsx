import React from 'react';
import './App.css';
import { OrderBook } from 'components/orderBook/OrderBook';

function App() {
  return (
    <div className="App h-screen p-20">
      <div className="flex justify-center items-center mx-auto max-w-screen-lg	">
        <OrderBook />
      </div>
    </div>
  );
}

export default App;
