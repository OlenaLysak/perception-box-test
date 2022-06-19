import React, { useState } from 'react';
import styles from './CharactersList.module.css';
import { Link } from 'react-router-dom';

//Components
import Pagination from './components/Pagination/Pagination';

const CharactersList = ({ characters, pageInfo }) => {
  const handleClick = () => {
    console.log('char clicked');
  };
  return (
    <div className={styles.wrapper}>
      <Pagination pageInfo={pageInfo}>
        <ul className={styles.list}>
          {characters.map((item) => (
            <li key={item.id}>
              <Link
                to={`/${item.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
                onClick={handleClick}
              >
                <div className={styles.listItem}>
                  <div>{item.name}</div>
                  <div className={styles.status}>{item.status}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Pagination>
    </div>
  );
};

export default CharactersList;
