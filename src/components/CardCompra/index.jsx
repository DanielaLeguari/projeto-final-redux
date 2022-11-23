import styles from './CardCompra.module.css';
import produto from '../../assets/anime-1.png';
import { AiOutlineHeart,AiFillMinusCircle, AiFillPlusCircle  } from 'react-icons/ai';
import { GrSubtractCircle } from 'react-icons/gr';

const CardCompra = () => {
    return(
        <>
       <div>
        <div className={styles.CardCompra}>
        <div className={styles.resumo}>
            <div>
                <img  className={styles.imgCard} src={produto} /></div>
            <div className={styles.descricaoCard}>
                <div>
                   <div className={styles.nome}>Dolen Sikil</div>
        <div className={styles.descricao}>Guerreiro elfo treinado no batalhão de elite, possui habilidades incríveis adicionadas ao seu poder militar. Compre este herói para ter mais poder.</div>  
                </div>
        <div  className={styles.valor}>
            <div  className={styles.preço}>
             <p>R$: 900.00</p>   
            </div>
          <div className={styles.quantidade}>
            <div className={styles.like}>
                <AiOutlineHeart size={'1.5rem'}/> 
            </div>
            <p className={styles.quantidadeNome}>Quantidade:</p>
            <div className={styles.quantidadeIcons}>
                <AiFillMinusCircle size={'1.5rem'} />
            <p>1</p>
            <AiFillPlusCircle  size={'1.5rem'} />  
            </div>
          
          </div>
        </div>
            </div>
           </div>
           <div className={styles.barraResumo}>
            <p>Resumo da Compra:</p>
            <p>Subtotal: R$: 900.00</p>
            </div>
           <button className={styles.finalizaCompra}>Finalizar Compra</button>
        </div>
       </div>
          
        </>
    );
}
export default CardCompra;