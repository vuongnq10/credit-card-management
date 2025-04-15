import React from 'react';

import Icon from 'components/Icon';
import { setFreezeCard } from 'store/actions/cardActions';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import styles from './styles.module.css';

const Index: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cards, currentCard } = useAppSelector((state) => state.cards);

  return (
    <div>
      <h1>Card Component</h1>
      <div className={styles.actions}>
        <div className={styles.action} onClick={() => dispatch(setFreezeCard(currentCard.cardNumber))}>
          <Icon name="freeze" />
          <span>
            {currentCard?.freezed ? 'Unfreeze card' : 'Freeze card'}
          </span>
        </div>
        <div className={styles.action}>
          <Icon name="speed" />
          <span>Set speend limit</span>
        </div>
        <div className={styles.action}>
          <Icon name="gPay" />
          <span>Add to GPay</span>
        </div>
        <div className={styles.action}>
          <Icon name="replaceCard" />
          <span>Replace card</span>
        </div>
        <div className={styles.action}>
          <Icon name="cancelCard" />
          <span>Cancel card</span>
        </div>
      </div>
    </div >
  );
};

export default Index;
