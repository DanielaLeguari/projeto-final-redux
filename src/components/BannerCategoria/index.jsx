import React from 'react';
import styles from './BannerCategoria.module.css'
import categorias from '../../json/categoria.json';

const BannerCategoria = ({id, categoria, imagemUrl}) => {
    return (
        <div className={styles.containerBannerCategoria}>
           <p>{categoria}</p>
           <img src={imagemUrl} alt="" />
        </div>
    );
}

export default BannerCategoria;
