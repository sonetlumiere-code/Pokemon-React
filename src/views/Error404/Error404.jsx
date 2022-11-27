import React from 'react';
import styles from './Error404.module.css';
import error404 from '../../assets/imgs/404-error.png';

const Error404 = () => {
  return (
    <>
    <div className={styles.error404ImgContainer}>
      <img src={error404} className={styles.error404Img}></img>     
    </div>
    <div className={styles.error404Txt}>
        <h3>Sorry! The page you’re looking for cannot be found.</h3>
    </div>
    </>
  )
}

export default Error404