import React from 'react';
import styles from './Card.module.css';

const Card = ({ pokemon, openModal }) => {

  return (
    <>   
    <div className={styles.box} onClick={openModal}>
        <div className={styles.imgBox}>
            <img src={pokemon.sprites.other.dream_world.front_default}></img>
        </div>
        <div className={styles.text}>
            <h5>{pokemon.name}</h5>
        </div>
    </div>
    </>
  )

}

export default Card