import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/funko-logo.png'
import { Link } from 'react-router-dom';
import Busca from '../Busca/index' 
import { AiOutlineShoppingCart } from 'react-icons/ai'


const linkStyle = {
  textDecoration: "none",
  color: 'white',
  fontSize: '20px',
  cursor: 'pointer',
  fontWeight: '700',
}

const Header = () => {
  return (
    <div className={styles.containerHeader}>
    <div className={styles.nav}>
         <img src={logo}></img>
      <Link style={linkStyle} to="/">Página Inicial</Link>
    </div>
       <Busca />
       <Link to='/carrinho'>
       <AiOutlineShoppingCart size={'3.4rem'} color={'white'} to='/carrinho' />
       </Link>
    </div>
  );
}

export default Header;
