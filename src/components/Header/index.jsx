import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/funko-logo.png'
import { Link } from 'react-router-dom';
import Busca from '../Busca/index' 
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RiShoppingCartFill, RiShoppingCart2Line} from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom';



const iconeProps = {
  color: 'white',
  size: 24
}

const linkStyle = {
  textDecoration: "none",
  color: 'white',
  fontSize: '20px',
  cursor: 'pointer',
  fontWeight: '700',
}

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={styles.containerHeader}>
    <div className={styles.nav}>
         <img src={logo}></img>
      <Link style={linkStyle} to="/">Página Inicial</Link>
    </div>
    {/* buscaSlice */}
       <Busca onClick={() => navigate('/')}/>
       <Link to='/carrinho'>
       {location.pathname === '/carrinho'
            ? <RiShoppingCartFill {...iconeProps} />
            : <RiShoppingCart2Line {...iconeProps} />
          }
       </Link>
    </div>
  );
}

export default Header;
