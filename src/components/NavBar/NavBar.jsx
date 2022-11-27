import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import styles from './NavBar.module.css';
import logo from '../../assets/imgs/pokemon-logo.png';

const NavBar = () => {

  const { authState, dispatch } = useContext(AuthContext);

  const logOut = () => {
    dispatch({
      type: types.LOGOUT
    })
  }

  const [menuState, setMenuState] = useState(false);
  
  const toggleMenu = () => {
    setMenuState(!menuState);
  }

  return (
    <>    
      <nav>
        <Link to='/'><img src={logo} className={styles.logo}/></Link>
        <div className={`${styles.toggle} ` + (menuState && `${styles.active}`)} onClick={toggleMenu}></div>
        <ul className={`${styles.navigation} ` + (menuState && `${styles.active}`)}>
          <li onClick={menuState == true ? toggleMenu : undefined}><Link to='/'>Home</Link></li>
          <li onClick={menuState == true ? toggleMenu : undefined}><Link to='/search'>Search</Link></li>
          <li onClick={menuState == true ? toggleMenu : undefined}><Link to='/favs'>Favorites</Link></li>
          <li onClick={menuState == true ? toggleMenu : undefined}><a className={styles.logOut} onClick={logOut}>Log Out</a></li>
        </ul>
      </nav>
    </>
  )

}

export default NavBar