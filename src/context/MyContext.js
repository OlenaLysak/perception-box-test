import React, { createContext, useState, useEffect } from 'react';

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const initialUrl = 'https://rickandmortyapi.com/api/character/?page=1&';
  const [currentUrl, setCurrentUrl] = useState(initialUrl);
  const [species, setSpecies] = useState('none');
  const [status, setStatus] = useState('none');
  const [gender, setGender] = useState('none');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const speciesFilter = species === 'none' ? '' : `species=${species}&`;
    const statusFilter = status === 'none' ? '' : `status=${status}&`;
    const genderFilter = gender === 'none' ? '' : `gender=${gender}`;
    const newUrl = initialUrl + speciesFilter + statusFilter + genderFilter;
    setCurrentUrl(newUrl);
  }, [species, status, gender]);

  const contextValues = {
    currentUrl,
    setCurrentUrl,
    species,
    setSpecies,
    status,
    setStatus,
    gender,
    setGender,
    currentPage,
    setCurrentPage,
  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
};

export default MyContextProvider;
