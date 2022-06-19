import React, { createContext, useState, useEffect } from 'react';

//Constants
import { INITIAL_URL } from '../constants/constants';

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [currentUrl, setCurrentUrl] = useState(INITIAL_URL);
  const [selected, setSelected] = useState('');
  // const [currChar, setCurrChar] = useState(null);

  useEffect(() => {
    if (!selected) return setCurrentUrl(INITIAL_URL);

    const nameFilter = 'name=' + selected.replaceAll(' ', '+');
    const newUrl = INITIAL_URL + nameFilter;

    setCurrentUrl(newUrl);
  }, [selected]);

  const contextValues = {
    currentUrl,
    setCurrentUrl,
    setSelected,
  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;
