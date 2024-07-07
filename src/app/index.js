import { useState } from 'react';
import sampleImage from './sample-image.svg';

// Explicit names for default exports are optional
export default Image = () => (
  <>
    <h1>Sample App</h1>
    <img src={sampleImage} width='256' height='256' />
  </>
);

export const sum = (a, b) => {
  return a + b;
};
