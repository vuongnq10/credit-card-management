import React from 'react';

import Button from 'components/Button';
import Icon from 'components/Icon';
import styles from './styles.module.css';

const Index: React.FC = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Available balance</h3>
      <div className={styles.summary}>
        <span className={styles.currency}>S$</span>
        <span className={styles.amount}>3,000</span>
        <Button icon={<Icon name='add' />} label="New card" />
      </div>
    </div>
  );
};

export default Index;