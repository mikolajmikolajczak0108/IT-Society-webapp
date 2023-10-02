import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
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
      <motion.div className="offers-grid">
        <AnimatePresence>
          {filteredOffers.map((offer, index) => (
            <motion.div
              className="offer-card"
              key={offer.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={`/assets/img/offer/${offer.image_path.split('/').pop()}`} alt={offer.title} />
              <motion.h2>{offer.title}</motion.h2>
              <motion.p>{offer.price} USD</motion.p>
              <motion.p>{offer.description}</motion.p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Offers;
