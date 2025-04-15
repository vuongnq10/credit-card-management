import React from 'react';

import Navigation from './Navigation';
import styles from './styles.module.css';

const Index: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <div className={styles.content}>
        <h1>Welcome to the Body Component!</h1>
        <p>This is a sample body component.</p>
      </div>
    </div>
  );
};

export default Index;
