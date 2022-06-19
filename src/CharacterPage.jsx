import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

//Components
import TextItem from './ui/TextItem';
import { Link } from 'react-router-dom';

//Styles
import styles from './CharacterPage.module.css';

//Constants
import { INITIAL_URL } from './constants/constants';

//Context
import useMyContext from './context/useMyContext';

const CharacterPage = () => {
  const [error, setError] = useState('');
  const { setCurrentPage, setCurrentUrl } = useMyContext();
  const { id } = useParams();
  const [episodes, setEpisodes] = useState('');
  const [character, setCharacter] = useState({
    name: '',
    species: '',
    gender: '',
    location: { name: '' },
    image: '',
    episode: '',
    status: '',
    created: '',
  });

  const formatEpisodes = (episodes) => {
    const arr = episodes.map((item) => {
      const epNum = item.replace(
        'https://rickandmortyapi.com/api/episode/',
        ''
      );
      return epNum;
    });
    const text = arr.join(', ');
    setEpisodes(text);
  };

  const handleBackHome = () => {
    setCurrentPage(1);
    setCurrentUrl(INITIAL_URL);
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        formatEpisodes(data.episode);
      })
      .catch((error) => setError(error.message));
  }, [id]);

  if (error) return <h1>{error}</h1>;

  return (
    <div className={styles.wrapper}>
      <Link to="/" onClick={handleBackHome}>
        <h2>Back Home</h2>
      </Link>
      <div className={styles.charCard}>
        <img
          className={styles.image}
          src={character.image}
          alt={character.name}
        />
        <div>
          <TextItem title="Name" value={character.name} />
          <TextItem title="Species" value={character.species} />
          <TextItem title="Gender" value={character.gender} />
          <TextItem title="Location" value={character.location?.name} />
          <TextItem title="Episode" value={episodes} />
          <TextItem title="Status" value={character.status} />
          <TextItem
            title="Created"
            value={moment(character.created).format('MMM Do YY')}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
