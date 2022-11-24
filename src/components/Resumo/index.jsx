import React from 'react';
import styles from './Resumo.module.css'

const Resumo = () => {
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
        <p className={styles.categoriasResumo}>mulher-maravilha</p>
        <p className={styles.categoriasResumo}>10</p>
        <p className={styles.categoriasResumo}><strong> R$:1000  </strong></p>
    </div>
 
 </div>
 </div>
 <div className={styles.barraResumo}>
                        <p>Subtotal: <strong> R$  </strong></p>
                    </div>

 </>
  );
}

export default Resumo;
