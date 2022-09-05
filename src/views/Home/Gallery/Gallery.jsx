import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.css';
import { apiBuilder } from '../../../services/apiConfig';
import { randomNumber } from '../../../utils/random';
import Card from '../../../components/Card/Card';
import Modal from '../../../components/Modal/Modal';
import Loading from '../../../components/Loading/Loading';
import Title from '../../../components/Title/Title';

const Gallery = () => {

  const [dataPokemons, setPokemons] = useState([]);
  const [openModal, setOpenModal] = useState({ open: false, data: {} });

  const getPokemons = async () => {
    const pokemons = await apiBuilder.getPokemons(randomNumber(1, 250), 20);
    setPokemons(pokemons);
  }

  useEffect(() => {
    getPokemons()
  }, [])
  
  return (
    <>
    <Title text={'Gallery'} />
    {
      dataPokemons.length ? (
        <div className={styles.cardsContainer}>
          {
            dataPokemons.map((poke) => (
              <Card key={poke.id} pokemon={poke} openModal={() => setOpenModal({ open: true, data: poke })}/>     
            ))
          } 
        </div>   
      ) : (
        <Loading/>
      )
    }
    {
      openModal.open && (
        <Modal openModal={openModal} onClose={() => setOpenModal({ open: false, data: {} })} />
      )
    } 
    </>
  )

}

export default Gallery