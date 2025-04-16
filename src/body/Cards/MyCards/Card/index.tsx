import React, { useMemo, useRef } from 'react';
import Image from 'next/image';

import Slick from 'components/Slick';
import Icon from 'components/Icon';
import { setFreezeCard, setCard } from 'store/actions/cardActions';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import type { CardHolder } from 'types/card';

import { maskString } from './utils';
import styles from './styles.module.css';

interface CardProps {
  freezed: boolean;
  name: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
};

const Card: React.FC<CardProps> = ({
  freezed,
  name,
  cardNumber,
  expirationDate,
  cvc,
}) => {
  return (
    <div className={styles.cardWrap}>
      <div className={`${styles.card} ${freezed ? styles.freeze : ''}`}>
        <div className={styles.logo}>
          <Image src="/card-logo.svg" alt={name} width={72} height={20} className={styles.image} />
        </div>
        <h1 className={styles.cardName}>{name}</h1>
        <span className={styles.cardNumber}>
          {maskString(cardNumber)}
        </span>
        <div className={styles.info}>
          <span>{`Thru ${expirationDate}`}</span>
          <span>{`CVV: ${cvc}`}</span>
        </div>
        <div className={styles.logo}>
          <Image src="/visa-logo.svg" alt={name} width={60} height={20} className={styles.image} />
        </div>
      </div>
      <div className={styles.mask}>
        <Icon name="eye" />
        <span>Show card number</span>
      </div>
    </div>
  );
};

const Index: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cards, slideIndex, currentCard } = useAppSelector((state) => state.cards);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const componentKey = useMemo(() => {
    wrapperRef?.current?.classList.remove(styles.fadeIn);
    wrapperRef?.current?.classList.add(styles.fadeOut);

    setTimeout(() => {
      if (wrapperRef.current) {
        wrapperRef.current.classList.remove(styles.fadeOut);
        wrapperRef.current.classList.add(styles.fadeIn);
      }
    }, 350);

    return cards.length * Math.random();
  }, [cards]);

  const onSlide = (index: number) => {
    dispatch(setCard(index));
  };

  return (
    <div>
      <div
        ref={wrapperRef}
        className={`${styles.wrapper} ${styles.fadeIn}`}
        style={{ height: 250 }}
      >
        <Slick
          settings={{
            afterChange: onSlide,
            initialSlide: slideIndex || 0,
          }}
          key={componentKey}
        >
          {cards.map((card: CardHolder, index: number) => (
            <Card key={index} {...card} />
          ))}
        </Slick>
      </div>

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
