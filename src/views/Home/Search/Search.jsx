import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
//import Card from '../../../components/Card/Card';
import Loading from '../../../components/Loading/Loading';
import Modal from '../../../components/Modal/Modal';
import Title from '../../../components/Title/Title';
import useForm from '../../../hooks/useForm';
import { apiBuilder } from '../../../services/apiConfig';
import styles from './Search.module.css';

const Search = () => {

  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [openModal, setOpenModal] = useState({open: false, data: {}});

  const search = async () => {
    setPokemon(undefined);
    setLoading(true);
    setError(false);
    const res = await apiBuilder.getPokemon(values.pokemonNameOrId);
    if (res instanceof Error) {    
      setPokemon(undefined);
      setLoading(false);
      setError(res.response.data);
    } else {
      setPokemon(res.data);
      setLoading(false);
      setError('');
    }
  }

  const [values, handleChange, handleSubmit] = useForm({
    pokemonNameOrId: '',
  }, search);

  return (
    <>
    <Title text={'Search'} />

    <Form onSubmit={handleSubmit} className="text-center">
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          name="pokemonNameOrId" 
          value={values.pokemonNameOrId}     
          placeholder="Pokemon name or Id"
          aria-label="Search"
          aria-describedby="searchPokemon"
          onChange={handleChange} 
          required
        />
        <Button 
          variant="outline-secondary" 
          id="searchPokemon" 
          type="submit"
        >
          Search
        </Button>
      </InputGroup>
    </Form>

    {
      loading && (
        <Loading/>
      )
    }
    {
      error && (
        <div className={styles.errorContainer}>
          <p className={styles.errorText}>{error}</p>
        </div>
      )
    }
    {          
      pokemon && (
        <div className={styles.cardContainer}>
          <div className={styles.box} onClick={() => setOpenModal({open: true, data: pokemon})}>
            <div className={styles.imgBox}>
                <img src={pokemon.sprites.other.dream_world.front_default}></img>
            </div>
            <div className={styles.text}>
                <h3>{pokemon.name}</h3>
            </div>
          </div>
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

export default Search