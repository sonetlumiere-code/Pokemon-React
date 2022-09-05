import React, { useContext } from 'react';
import styles from './Welcome.module.css';
import { AuthContext } from '../../auth/AuthContext';

const Welcome = () => {

  const { authState, dispatch } = useContext(AuthContext);

  return (
    <div className={styles.welcome}>
      <h3>Welcome!</h3>
      <p>{authState.user?.name}</p>
    </div>
  )
}

export default Welcome