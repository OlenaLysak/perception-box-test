import React from 'react';
import styles from './CharactersList.module.css';
import { Link } from 'react-router-dom';

//Components
import Pagination from './components/Pagination/Pagination';

const CharactersList = ({ characters, pageInfo }) => {
  return (
    <div className={styles.wrapper}>
      <Pagination pageInfo={pageInfo}>
        <ul className={styles.list}>
          {characters.map((item) => (
            <li key={item.id}>
              <Link
                to={`/${item.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <div className={styles.listItem}>
                  <div>{item.name}</div>
                  <div
                    className={`${
                      item.status === 'Alive'
                        ? styles.statusAlive
                        : item.status === 'Dead'
                        ? styles.statusDead
                        : styles.statusunknown
                    }`}
                  >
                    {item.status}
                  </div>
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
