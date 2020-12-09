import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      {/* Favorite products */}
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      {/* Other Products - Sweet treats */}
      <Products heading='Choose your favorite' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
