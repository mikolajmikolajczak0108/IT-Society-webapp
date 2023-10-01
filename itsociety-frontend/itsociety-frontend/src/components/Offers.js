import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Offers.css';

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    axios.get('http://localhost:8000/offers/')
      .then(response => {
        setOffers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const filteredOffers = offers.filter(offer =>
    offer.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === 'All' || offer.title.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="offers-container">
      <h1>Offers</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={e => setSearchTerm(e.target.value)}
      />
      <select onChange={e => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Programming">Programming</option>
        <option value="Math">Math</option>
        <option value="Language">Language</option>
      </select>
      <div className="offers-grid">
        {filteredOffers.map((offer, index) => (
          <div className="offer-card" key={offer.id} style={{animationDelay: `${index * 0.1}s`}}>
            <img src={`/assets/img/offer/${offer.image_path.split('/').pop()}`} alt={offer.title} />
            <h2>{offer.title}</h2>
            <p>{offer.price} USD</p>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
