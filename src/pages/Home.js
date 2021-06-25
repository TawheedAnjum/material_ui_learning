import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const cardIndex = [0, 1, 2, 3, 5, 6, 7, 8, 9];

function Home() {
    return (
      <div>
        <Navbar />
        <Header />
        <Cards cardNumber={cardIndex} />
        <Footer />
      </div>
    );
}

export default Home
