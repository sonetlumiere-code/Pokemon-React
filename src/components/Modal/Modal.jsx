import React, { useState, useEffect } from 'react';
import { storageFavorites } from '../../storage/storage';
import styles from './Modal.module.css';

const Modal = ({ openModal, onClose }) => {

  const [isFav, setIsFav] = useState(false);

  const checkIsFav = (poke) => {
    const pokeFavs = storageFavorites.getData('pokeFavs');
    setIsFav(pokeFavs?.findIndex(x => x.id == poke.id) > -1 ? true : false); 
  }

  const addToFav = (poke) => {
    storageFavorites.setData('pokeFavs', poke)
    onClose();
  }

  const removeFromFav = (poke) => {
    storageFavorites.removeData('pokeFavs', poke);
    onClose();
  }

  useEffect(() => {
    checkIsFav(openModal.data)
  }, [openModal.data]);

  if (!openModal.open) return null;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalRight}>
        <p className={styles.closeBtn} onClick={onClose}>x</p>
        <div className={styles.content}>
          <img className={styles.modalImg} src={openModal.data.sprites.other.dream_world.front_default}></img>
          <h3 className={styles.modalTitle}>{openModal.data.name}</h3>
          <p>{`Id: ${openModal.data.id}`}</p>
          <p>{`Altura: ${openModal.data.height}`}</p>
          <p>{`Peso: ${openModal.data.weight}`}</p>
        </div>
        <div className={styles.btnContainer}>
          {
            isFav ? (
              <button className={styles.btnSecondary} onClick={() => removeFromFav(openModal.data)}>
                <span className={styles.bold}>Remove from Favorites</span>
              </button> 
            ) : (
              <button className={styles.btnPrimary} onClick={() => addToFav(openModal.data)}>
                <span className={styles.bold}>Add to Favorites</span>
              </button> 
            )
          }
        </div>
      </div>
    </div> 
  )

}

export default Modal;