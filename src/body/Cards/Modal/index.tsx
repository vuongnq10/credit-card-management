import React, { useState } from 'react';

import { useAppDispatch } from 'store/hooks';
import { addCard } from 'store/actions/cardActions';
import Input from 'components/Input';
import Button from 'components/Button';

import styles from './styles.module.css';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const submit = () => {
    if (Number(name) || Number(name) === 0) {
      setError('Please enter text for name only.');
      return;
    }
    dispatch(addCard(name));
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
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)} label="Enter your name"
            error={error}
          />
          <div>
            <Button className={styles.submit} label="Submit" onClick={submit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
