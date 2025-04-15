'use client';
import React, { useEffect } from 'react';
import { getCards } from 'store/actions/cardActions';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import styles from './styles.module.css';

const Index: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
    </div>
  );
};

export default Index;
