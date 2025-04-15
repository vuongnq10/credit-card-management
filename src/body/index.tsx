import React from 'react';

import Navigation from './Navigation';
import Cards from './Cards';
import styles from './styles.module.css';

const Index: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.content}>
        <Cards />
      </div>
    </div>
  );
};

export default Index;
