'use client';
import React, { useState } from 'react';

import Button from 'components/Button';
import Icon from 'components/Icon';

import Modal from './Modal';
import MyCards from './MyCards';
import styles from './styles.module.css';

const Index: React.FC = () => {
  const [tab, setTab] = useState<string>('myCards');
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Available balance</h3>
        <div className={styles.summary}>
          <span className={styles.currency}>S$</span>
          <span className={styles.amount}>3,000</span>
          <Button icon={<Icon name='add' />} label="New card" onClick={() => setOpen(!open)} />
        </div>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${tab === 'myCards' && styles.tabActive}`}
            onClick={() => setTab('myCards')}
          >My debit cards</div>
          <div
            className={`${styles.tab} ${tab === 'companyCard' && styles.tabActive}`}
            onClick={() => setTab('companyCard')}
          >All company cards</div>
        </div>
      </div>
      <MyCards />
      {open && <Modal onClose={() => setOpen(!open)} />}
    </div>
  );
};

export default Index;