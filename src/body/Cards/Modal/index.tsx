import React, { useState } from 'react';

import { useAppDispatch } from 'store/hooks';
import { addCard } from 'store/actions/cardActions';
import Input from 'components/Input';
import Button from 'components/Button';

import styles from './styles.module.css';

interface ModalProps {
  onClose: () => void;
  setIndex: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, setIndex }) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>('');

  const submit = () => {
    dispatch(addCard(name));
    setIndex();
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>Add new card</h2>
        <div className={styles.content}>
          <Input value={name} onChange={e => setName(e.target.value)} label="Enter your name" />
          <div>
            <Button className={styles.submit} label="Submit" onClick={submit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
