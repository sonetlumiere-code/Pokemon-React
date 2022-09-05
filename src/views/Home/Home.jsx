import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Gallery from './Gallery/Gallery';
import Favs from './Favs/Favs';
import Search from './Search/Search';
import Error404 from '../Error404/Error404';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';
//import Welcome from '../../components/Welcome/Welcome';

const Home = () => {

  return (
    <>
    <NavBar/>  
    <section className={styles.homeContainer}>
      <Routes>
        <Route path='/' element={<Gallery/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/favs' element={<Favs/>} />
        <Route path='*' element= {<Error404/>} />
      </Routes>     
    </section>
    {/*<Welcome/>*/}
    <Footer/>
    </>
  )
  
}

export default Home
