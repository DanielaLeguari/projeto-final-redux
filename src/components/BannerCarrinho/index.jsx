import styles from './Banner.module.css';
import compra from '../../assets/compra.svg'
import categorias from '../../assets/categorias.svg';

const BannerCarrinho = () => {
    return(
        <>
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                <img
                    className={styles.minhaFoto}
                    src={compra}
                    />
                </h1>
                <p className={styles.paragrafo}>
               Finalizando sua compra
                </p>
            </div>
        </div>
        </>
    );
}
export default BannerCarrinho;