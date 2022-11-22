import React from 'react';
import styles from './CardColecionavel.module.css';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const CardColecionavel = ({ id, titulo, descricao, valor, imagemUrl }) => {
  return (
    <div className={styles.item}>
      <p className={styles.titulo}>{titulo}</p>
      <img src={imagemUrl} alt=""></img>
      <p className={styles.descricao}>Sobre o item: {descricao}</p>
      <div className={styles.containerDetalhes}>
        <div className={styles.containerPreco}>
          <p className={styles.valor}>R${valor}</p>
        </div>
        <AiOutlineHeart size={'2rem'} />
        <AiOutlineShoppingCart  size={'2rem'}/>
      </div>
    </div>
  );
}

export default CardColecionavel;
