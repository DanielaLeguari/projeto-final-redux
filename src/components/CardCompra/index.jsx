import styles from './CardCompra.module.css';
import produto from '../../assets/anime-1.png';
import { AiOutlineHeart, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { GrSubtractCircle } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';
import CardColecionavel from 'components/CardColecionavel';
import { Link } from 'react-router-dom';

const CardCompra = () => {

    const dispatch = useDispatch();
    const { carrinho, total } = useSelector(state => {
        let total = 0;
        const regexp = new RegExp(state.busca, 'i'); //regex de novo
        console.log(state.carrinho)
        const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
            const item = state.itens.find(item => item.id === itemNoCarrinho.id);
            total += (item.preco * itemNoCarrinho.quantidade);
            if (item.titulo.match(regexp)) { //condicional de busca para o carrinho
                itens.push({
                    ...item,
                    quantidade: itemNoCarrinho.quantidade,
                });
            }
            return itens;
        }, []);
        return {
            carrinho: carrinhoReduce,
            total,
        };
    });
    return (
        <>
           

            <div>
                <div className={styles.CardCompra}>
                    <div className={styles.resumo}>
                    {carrinho.map(item => <CardColecionavel key={item.id} {...item} carrinho />)}
                    </div>
                    <div className={styles.barraResumo}>
                        <p>Ver carrinho de Compras:</p>
                        <p>Subtotal: <strong> R$ {total.toFixed(2)} </strong></p>
                    </div>
                    <Link to='/resumoCompra'>
       <button className={styles.finalizaCompra}>Finalizar Compra</button>
       </Link>
                    
                </div>
            </div>

        </>
    );
}
export default CardCompra;