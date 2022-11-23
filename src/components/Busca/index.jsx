import React from 'react';
import styles from './Busca.module.css'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux';
import { mudarBusca, resetarBusca } from 'store/reducers/busca';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Busca = () => {
  const busca = useSelector(state => state.busca);
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <div className={styles.busca}>
           <input 
            className={styles.input} 
            placeholder='O que você procura?'
            value={busca}
            onChange={evento => dispatch(mudarBusca(evento.target.value))}
            />   
          <BiSearchAlt2 size={'1.5rem'} color={'grey'}  />
    </div>

     
  );
}

export default Busca;
