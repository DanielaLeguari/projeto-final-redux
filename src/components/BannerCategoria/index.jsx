import React from 'react';
import styles from './BannerCategoria.module.css'
import categorias from '../../json/categoria.json';

const BannerCategoria = () => {
  return (
    <div>
        {categorias.map((categoria) => {
        return <img className={styles.capa} src={categoria.imagemUrl} alt="categoria" height="100px" />
        })}
    
    </div>
  );
}

export default BannerCategoria;
