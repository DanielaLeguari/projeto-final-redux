import React from 'react';
import styles from './Busca.module.css'
import { BiSearchAlt2 } from 'react-icons/bi'

const Busca = () => {
  return (
    <div className={styles.busca}>
           <input 
            className={styles.input} 
            placeholder='O que você procura?'
            />   
            <BiSearchAlt2 size={'1.5rem'} color={'grey'}/>
    </div>

     
  );
}

export default Busca;
