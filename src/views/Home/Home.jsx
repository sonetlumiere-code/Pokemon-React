import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';
//import Welcome from '../../components/Welcome/Welcome';

const Home = () => {

  return (
    <>
    <NavBar/>  
    <section className={styles.homeContainer}>
      <Outlet/>
    </section>
    {/*<Welcome/>*/}
    <Footer/>
    </>
  )
  
}

export default Home
