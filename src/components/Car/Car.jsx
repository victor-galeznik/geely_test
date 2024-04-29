import React from 'react';
import cn from 'classnames';
import carImg from './img/car.png';
import carSmall1 from './img/car-small-1.jpg';
import carSmall2 from './img/car-small-2.jpg';
import carSmall3 from './img/car-small-3.jpg';
import carSmall4 from './img/car-small-4.jpg';
import icon from './img/image-1.svg';

import styles from './Car.module.scss';

const Car = ({ title, previousPrice, currentPrice, payment }) => {
  return (
    <div className={styles.component}>
      <h2 className={styles.component__title}>{title}</h2>
      <span className={styles.component__previousPrice}>
        {previousPrice} руб.
      </span>
      <span className={styles.component__currentPrice}>
        от {currentPrice} руб.
      </span>
      <span className={styles.component__payment}>
        Платёж от {payment} руб./мес.
      </span>
      <div className={styles.buttons}>
        <button className={cn(styles.btn, styles.btn__get)}>
          Получить предложение
        </button>
        <button className={cn(styles.btn, styles.btn__buy)}>
          Купить в кредит
        </button>
      </div>

      <div className={styles.ul__list}>
        <ul>
          <li className={styles.image1}>
            <img src={icon} alt="" />
            КАСКО или комплект
            <br />
            шин в подарок
          </li>
          <li className={styles.image2}>
            <img src={icon} alt="" />
            Первоначальный
            <br />
            взнос от 0 ₽
          </li>
          <li className={styles.image3}>
            <img src={icon} alt="" />
            Бонус по трейд-
            <br />
            ин до 300 000 ₽
          </li>
          <li className={styles.image4}>
            <img src={icon} alt="" />
            Гарантия 5 лет
            <br />
            или 150 000 км
          </li>
        </ul>
      </div>

      <img className={styles.carImg} src={carImg} alt="car" />

      <div className={styles.swiper__buttons}>
        <button
          className={cn(styles.swiper__button, styles.swiper__button1)}
        ></button>
        <button
          className={cn(styles.swiper__button, styles.swiper__button2)}
        ></button>
        <button
          className={cn(styles.swiper__button, styles.swiper__button3)}
        ></button>
        <button
          className={cn(styles.swiper__button, styles.swiper__button4)}
        ></button>
        <button
          className={cn(styles.swiper__button, styles.swiper__button5)}
        ></button>
      </div>

      <div className={styles.small_cars}>
        <img
          className={styles.small_cars__img}
          src={carSmall1}
          alt="car small"
        />
        <img
          className={styles.small_cars__img}
          src={carSmall2}
          alt="car small"
        />
        <img
          className={styles.small_cars__img}
          src={carSmall3}
          alt="car small"
        />
        <img
          className={styles.small_cars__img}
          src={carSmall4}
          alt="car small"
        />
      </div>
    </div>
  );
};

export default Car;
