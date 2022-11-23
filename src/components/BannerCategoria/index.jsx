import React from 'react';
import styles from './BannerCategoria.module.css'


const BannerCategoria = ({nome,thumbnail, header, id,  description }) => {
    return (
        <div className={styles.containerBannerCategoria}>
           <p>{nome}</p>
           <img src={thumbnail} alt="" />
        </div>
    );
}

export default BannerCategoria;
