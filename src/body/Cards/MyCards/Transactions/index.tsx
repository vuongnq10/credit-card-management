import React from 'react';

import { useAppSelector } from 'store/hooks';
import type { Transaction } from 'types/card';
import Icon from 'components/Icon';

import styles from './styles.module.css';

const Index: React.FC = () => {
  const { transactions } = useAppSelector((state) => state.cards.currentCard);
  return (
    <div>
      <div className={styles.panel}>
        <div className={styles.header}>
          <Icon name="cardDetail" />
          <span>Card details</span>
          <Icon name="down" />
        </div>
      </div>
      <div className={styles.panel}>
        <div className={styles.header}>
          <Icon name="transaction" />
          <span>Recent transactions</span>
          <Icon name="up" />
        </div>
        <div className={styles.body}>
          {transactions.slice(4).map((transaction: Transaction, index: number) => (
            <div className={styles.transaction} key={index}>
              {transaction.description}
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          View all card transactions
        </div>
      </div>
    </div>
  );
};

export default Index;
