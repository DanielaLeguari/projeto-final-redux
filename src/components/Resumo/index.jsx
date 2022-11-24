import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import itens from 'store/reducers/itens';
import styles from './Resumo.module.css'

const Resumo = () => {
    const { carrinho, total } = useSelector(state => {
        let total = 0;
        const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
            const item = state.itens.find(item => item.id === itemNoCarrinho.id);
            total += (item.preco * itemNoCarrinho.quantidade);
            itens.push({
                ...item,
                quantidade: itemNoCarrinho.quantidade,
            });
            return itens;
        }, []);
        console.log(total, carrinhoReduce)
        return { carrinho: carrinhoReduce, total}
    });
  return (
 <>
 <div className={styles.wrapperResumo}>
     <div className={styles.containerResumo}>
    <div className={styles.produtosTitulo}>
        <p className={styles.categoriasResumo}>Produtos</p>
        <p className={styles.categoriasResumo}>Quantidade</p>
        <p className={styles.categoriasResumo}>Preço</p>
    </div>
    <div className={styles.produtosResumo}>
      {
        carrinho.map(item => (<>
        <p className={styles.categoriasResumo}>{item.titulo}</p>
        <p className={styles.categoriasResumo}>{item.quantidade}</p>
        <p className={styles.categoriasResumo}><strong> {item.preco}  </strong></p>
        </>
        ))
      }
    </div>
 
 </div>
 </div>
 <div className={styles.barraResumo}>
                        <p >Subtotal: <strong> R$ {total.toFixed(2)} </strong></p>
                    </div>

 </>
  );
}

export default Resumo;
