import React, { useEffect, useState } from 'react';
import Card from '../../../components/Card/Card';
import Modal from '../../../components/Modal/Modal';
import Title from '../../../components/Title/Title';
import { storageFavorites } from '../../../storage/storage';
import styles from './Favs.module.css';

const Favs = () => {

  const [pokeFavs, setPokeFavs] = useState([]);
  const [openModal, setOpenModal] = useState({open: false, data: {}});

  const getFavorites = () => {
    const pokeFavs = storageFavorites.getData('pokeFavs');
    setPokeFavs(pokeFavs);
    console.table(pokeFavs);
  }

  useEffect(() => {
    getFavorites()
  }, [openModal]);

  return (
    <>
    <Title text={'Favorites'} />
    {
      pokeFavs?.length ? (
        <div className={styles.cardsContainer}>
          {
            pokeFavs.map((poke) => (
              <Card key={poke.id} pokemon={poke} openModal={() => setOpenModal({open: true, data: poke})}/>     
            ))
          } 
        </div>   
      ) : (
        <div className={styles.message}>
          <p>No hay Pokemones favoritos cargados</p>
        </div>
      )
    }
    {
      openModal.open && (
        <Modal openModal={openModal} onClose={() => setOpenModal({open: false, data: {}})} />
      )
    }
    </>
  )
}

export default Favs