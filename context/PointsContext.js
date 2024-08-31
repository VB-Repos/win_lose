// context/PointsContext.js
import React, { createContext, useState } from 'react';

export const PointsContext = createContext();

export const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState(0);

  const addPoints = (value) => {
    setPoints(prevPoints => prevPoints + value);
  };

  const deductPoints = (value) => {
    setPoints(prevPoints => prevPoints - value);
  };

  return (
    <PointsContext.Provider value={{ points, addPoints, deductPoints }}>
      {children}
    </PointsContext.Provider>
  );
};
