import React from 'react';

import { useAppSelector } from 'store/hooks';
import type { Transaction } from 'types/card';
import Icon from 'components/Icon';

import styles from './styles.module.css';

const bgColor: Record<string, string> = {
  flight: '#00D6B51A',
  megaPhone: '#F251951A',
  fileStorage: '#009DFF1A',
};

const Index: React.FC = () => {
  const { name, transactions } = useAppSelector((state) => state.cards.currentCard);

  return (
    <div className={styles.container}>
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
              <div className={styles.transactionType} style={{ backgroundColor: bgColor[transaction.type] }}>
                <Icon name={transaction.type} />
              </div>
              <div className={styles.content}>
                <span className={styles.name}>{name}</span>
                <span className={styles.date}>{transaction.date}</span>
                <div className={styles.description}>
                  <div className={styles.card}>
                    <Icon name="smallCard" />
                  </div>
                  <span className={styles.desc}>
                    {transaction.description}
                  </span>
                </div>
              </div>
              <div className={styles.amount}>
                {`- S$ ${transaction.amount}`}
              </div>
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
