import React from 'react';
import Image from 'next/image';

import Icon from 'components/Icon';
import styles from './styles.module.css';

interface Navigation {
  name: string;
  icon: string;
  active: boolean;
}
const navigation: Array<Navigation> = [
  { name: 'Account', icon: 'account', active: false },
  { name: 'Card', icon: 'card', active: true },
  { name: 'Payment', icon: 'payment', active: false },
  { name: 'Credit', icon: 'credit', active: false },
  { name: 'Settings', icon: 'settings', active: false },
];

const Index: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image src="/Aspire-Logo.svg" alt="Aspire Company" width={125} height={35} className={styles.image} />
      <p className={styles.title}>
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </p>
      <div className={styles.navigation}>
        {navigation.map((item: Navigation) => (
          <div key={item.name} className={styles.option}>
            <Icon name={item.icon} active={item.active} />
            <span className={item.active ? styles.active : ''}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
