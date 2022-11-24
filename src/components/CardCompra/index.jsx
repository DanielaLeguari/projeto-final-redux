import styles from './CardCompra.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardColecionavel from 'components/CardColecionavel';

const CardCompra = () => {

    const navigate = useNavigate();
    const { carrinho, total } = useSelector(state => {
        let total = 0;
        const regexp = new RegExp(state.busca, 'i');
        const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
            const item = state.itens.find(item => item.id === itemNoCarrinho.id);
            total += (item.preco * itemNoCarrinho.quantidade);
            if (item.titulo.match(regexp)) {
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
                        {carrinho?.length === 0 ? <h1 className={styles.carrinhoVazio}> Seu carrinho está vazio!</h1> :
                            carrinho.map(item => <CardColecionavel key={item.id} {...item} carrinho />)}
                    </div>
                    <div className={styles.barraResumo}>
                        <p>Ver carrinho de Compras:</p>
                        <p>Subtotal: <strong> R$ {total.toFixed(2)} </strong></p>
                    </div>
                    <button onClick={() => { navigate('/resumo'); }} className={styles.finalizaCompra}>Finalizar Compra</button>
                </div>
            </div>

        </>
    );
}
export default CardCompra;