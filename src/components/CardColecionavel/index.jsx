import React from 'react';
import styles from './CardColecionavel.module.css';
import { useDispatch } from 'react-redux';
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillHeart } from 'react-icons/ai';
import { mudarFavorito } from 'store/reducers/itens';

const CardColecionavel = ({ titulo, descricao, foto, favorito, preco, id, categoria }) => {

  const dispatch = useDispatch();

  function resolverFavorito() {
    dispatch(mudarFavorito(id));
  }

  return (
    <>
      <div className={styles.post}>
        <div className={styles.item}>
          <p className={styles.titulo}>{titulo}</p>
          <img className={styles.imagemItens} src={foto} alt=""></img>
          <p className={styles.descricao}>Sobre o item: {descricao}</p>
          
        </div>
        <div className={styles.containerDetalhes}>
            <div className={styles.containerPreco}>
              <p className={styles.valor}>R${preco}</p>
            </div>
            {favorito ? <AiFillHeart color='red' onClick={resolverFavorito} size={'2rem'} />
              : <AiOutlineHeart size={'2rem'} color='white' onClick={resolverFavorito} />}
            <AiOutlineShoppingCart size={'2rem'} color='white'  />
          </div>
      </div>
    </>
  );
}

export default CardColecionavel;
