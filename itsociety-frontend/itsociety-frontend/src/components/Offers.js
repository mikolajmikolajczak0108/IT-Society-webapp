import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/offers/')
      .then(response => {
        setOffers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Offers</h1>
      <ul>
        {offers.map(offer => (
          <li key={offer.id}>
            {offer.title} - {offer.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Offers;
