import React, { InputHTMLAttributes } from 'react';

import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Index: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} {...props} />
    </div>
  );
};

export default Index;
