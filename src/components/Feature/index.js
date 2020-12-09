import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the Day - You cant afford to miss this 🤩</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;