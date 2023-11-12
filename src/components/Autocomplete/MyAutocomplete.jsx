import React, { useState, useEffect } from 'react';

//Components
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

//Constants
import { INITIAL_URL } from '../../constants/constants';

//Utils
import { getUniqueValues } from '../../utils/utils';

const MyAutocomplete = ({ handleOptionSelected }) => {
  const [options, setOptions] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSetOptions = (results) => {
    if (!results) return;
    const names = results.map((item) => item.name);
    const sortedUniqueNames = getUniqueValues(names).sort();
    setOptions(sortedUniqueNames);
  };

  const handleInputChange = (value) => {
    setUserInput(value);
  };

  useEffect(() => {
    const nameFilter = 'name=' + userInput.replaceAll(' ', '+');
    const newUrl = INITIAL_URL + nameFilter;
    fetch(newUrl)
      .then((response) => response.json())
      .then((data) => {
        handleSetOptions(data.results);
      });
  }, [userInput]);

  return (
    <Autocomplete
      sx={{ width: '350px' }}
      options={options}
      onChange={(e, value) => handleOptionSelected(e, value)}
      onInputChange={(e, value) => handleInputChange(value)}
      renderInput={(params) => <TextField {...params} label="Search by name" />}
    />
  );
};

export default MyAutocomplete;
