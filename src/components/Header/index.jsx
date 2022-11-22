import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/funko-logo.png'
import { Link } from 'react-router-dom';
import Busca from '../Busca/index' 
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { buildQueries } from '@testing-library/react';

const linkStyle = {
  textDecoration: "none",
  color: 'white',
  fontSize: '20px',
  cursor: 'pointer',
}

const Header = () => {
  return (
    <div className={styles.containerHeader}>
    <div className={styles.nav}>
         <img src={logo}></img>
      <Link style={linkStyle} to="/home">Página Inicial</Link>
    </div>
       <Busca />
       <AiOutlineShoppingCart size={'3.4rem'} color={'white'} to='/carrinho' />
    </div>
  );
}

export default Header;
