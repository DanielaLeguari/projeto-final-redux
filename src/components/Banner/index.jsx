import styles from './Banner.module.css';
import fotoBanner from '../../assets/banner.svg'
import categorias from '../../assets/categorias.svg';
const Banner = () => {
    return(
        <>
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                <img
                    className={styles.minhaFoto}
                    src={fotoBanner}
                    />
                </h1>
                <p className={styles.paragrafo}>
               Conheça a nossa sessão de itens colecionáveis!!!
                </p>
                <div className={styles.categoria}>
                </div>
                <img
                    className={styles.categoriasTitle}
                    src={categorias}
                    />
            </div>
        </div>
        </>
    );
}
export default Banner;