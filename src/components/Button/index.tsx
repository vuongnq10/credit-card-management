import React from 'react';

import styles from './styles.module.css';

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}
const Index: React.FC<ButtonProps> = ({ children, icon, label, onClick, ...rest }) => {
  return (
    <button className={styles.btn} onClick={onClick} {...rest}>
      {icon && <span>{icon}</span>}
      {children || label}
    </button>
  );
};

export default Index;
export type { ButtonProps };