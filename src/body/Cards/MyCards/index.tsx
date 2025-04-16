'use client';
import React, { useEffect } from 'react';
import { getCards } from 'store/actions/cardActions';
import { useAppDispatch } from 'store/hooks';

import Card from './Card';
import Transactions from './Transactions';
import styles from './styles.module.css';

const Index: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Card />
      </div>
      <div className={styles.transactions}>
        <Transactions />
      </div>
    </div>
  );
};

export default Index;
