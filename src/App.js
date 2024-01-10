import React, { useState, useEffect } from 'react';

//Style
import styles from './App.module.css';

//Components
import MyAutocomplete from './components/Autocomplete/MyAutocomplete';
import CharactersList from './CharactersList';

//Context
import useMyContext from './context/useMyContext';

function App() {
  const [characters, setCharacters] = useState([]);
  const { currentUrl } = useMyContext();
  const [error, setError] = useState('');
  const [pageInfo, setPageInfo] = useState({});
  const { setSelected } = useMyContext();

  const handleOptionSelected = (e, value) => {
    setSelected(value);
  };

  useEffect(() => {
    fetch(currentUrl)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setPageInfo(data.info);
      })
      .catch((error) => setError(error.message));
  }, [currentUrl]);

  if (error) return <h1>{error}</h1>;

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>Rick and Morty Test Task</header>
      <MyAutocomplete handleOptionSelected={handleOptionSelected} />
      <CharactersList characters={characters} pageInfo={pageInfo} />
    </div>
  );
}

export default App;
