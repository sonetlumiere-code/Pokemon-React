import React from 'react';
import styles from './Title.module.css';

const Title = ({ text }) => {
  return (
    <div className={styles.titleText}>
        <h2>{text}</h2>
    </div>
  )
}

export default Title