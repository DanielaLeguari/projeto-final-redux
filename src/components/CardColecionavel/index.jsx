import React from 'react';
import styles from './CardColecionavel.module.css';
import { useDispatch } from 'react-redux';
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillHeart  } from 'react-icons/ai';
import { mudarFavorito } from 'store/reducers/itens';

const CardColecionavel = ({ titulo, descricao, foto, favorito, preco, id, categoria }) => {

  const dispatch = useDispatch();

  function resolverFavorito() {
    dispatch(mudarFavorito(id));
  }

  return (
    <div className={styles.item}>
      <p className={styles.titulo}>{titulo}</p>
      <img src={foto} alt=""></img>
      <p className={styles.descricao}>Sobre o item: {descricao}</p>
      <div className={styles.containerDetalhes}>
        <div className={styles.containerPreco}>
          <p className={styles.valor}>R${preco}</p>
        </div>
        {favorito ? <AiFillHeart color='#041833' onClick={resolverFavorito} size={'2rem'} />
          : <AiOutlineHeart  size={'2rem'} onClick={resolverFavorito} />}
        <AiOutlineShoppingCart size={'2rem'} />
      </div>
    </div>
  );
}

export default CardColecionavel;
