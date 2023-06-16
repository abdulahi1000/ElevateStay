import React, { createContext, useEffect, useState } from 'react';
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState(null);

  useEffect(() => {
    // Retrieve the shared data from localStorage on component mount
    const data = localStorage.getItem('cartItems');
    if (data) {
      setSharedData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    // Store the shared data in localStorage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(sharedData));
    // console.log('data channge', sharedData)
  }, [sharedData]);

  return (
    <DataContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
