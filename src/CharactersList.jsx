import React, { useState } from 'react';
import styles from './CharactersList.module.css';

//Components
import Pagination from './components/Pagination/Pagination';

const CharactersList = ({ characters, pageInfo }) => {
  // const [currentChar, setCurrentChar] = useState({
  //   name: '',
  //   status: '',
  //   species: '',
  //   type: '',
  //   gender: '',
  //   origin: { name: '' },
  //   location: { name: '' },
  //   image: '',
  // });

  // const handleOpen = (data) => {
  //   setCurrentChar(data);
  //   setOpen(true);
  // };
  // const handleClose = () => setOpen(false);
  return (
    <div className={styles.wrapper}>
      <Pagination pageInfo={pageInfo}>
        <ul className={styles.list}>
          {characters.map((item) => (
            <li key={item.id}>
              <div className={styles.listItem}>
                <div>{item.name}</div>
                <div className={styles.status}>{item.status}</div>
              </div>
            </li>
          ))}
        </ul>
      </Pagination>
    </div>
  );
};

export default CharactersList;
