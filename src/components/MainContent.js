import React, { useState, useEffect } from 'react';
import './MainContent.css';

const MainContent = () => {
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [interval, setInterval] = useState('1m');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPairs, setFilteredPairs] = useState(['BTC/USD', 'ETH/USD', 'ADA/USD']);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    setTotal(e.target.value * amount);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setTotal(price * e.target.value);
  };

  const handleIntervalChange = (e) => {
    setInterval(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const pairs = ['BTC/USD', 'ETH/USD', 'ADA/USD'];
    setFilteredPairs(
      pairs.filter(pair => pair.toLowerCase().includes(searchTerm))
    );
  }, [searchTerm]);

  return (
    <main className="main">
      <section className="chart">
        <h2>Financial Chart</h2>
        <select onChange={handleIntervalChange} value={interval}>
          <option value="1m">1m</option>
          <option value="5m">5m</option>
          <option value="15m">15m</option>
          <option value="1h">1h</option>
        </select>
        <div className="candlestick-chart">[Chart Placeholder for {interval} interval]</div>
      </section>

      <section className="trading-data">
        <div className="trading-pairs">
          <h3>Trading Pairs</h3>
          <input
            type="text"
            placeholder="Search trading pairs"
            onChange={handleSearchChange}
          />
          <ul>
            {filteredPairs.map(pair => (
              <li key={pair}>{pair}</li>
            ))}
          </ul>
        </div>
        <div className="order-book">
          <h3>Order Book</h3>
          <div className="orders">
            <div className="buy-orders">Buy Orders</div>
            <div className="sell-orders">Sell Orders</div>
          </div>
        </div>
      </section>

      <section className="place-orders">
        <h3>Place Orders</h3>
        <form>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={handlePriceChange}
            placeholder="Enter price"
          />
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
          <label htmlFor="total">Total:</label>
          <input
            type="number"
            id="total"
            name="total"
            value={total}
            readOnly
            placeholder="Total value"
          />
          <button type="submit">Buy</button>
          <button type="submit">Sell</button>
        </form>
      </section>
    </main>
  );
};

export default MainContent;
