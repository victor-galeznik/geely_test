import React from 'react';
import styles from './Header.module.scss';
import { carBrands } from '../../constants/cars';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Модельный ряд GEELY</h1>

      <div className={styles.cars__wrapper}>
        {carBrands.map((car) => (
          <button className={styles.cars__el} key={car.id}>
            {car.name}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
