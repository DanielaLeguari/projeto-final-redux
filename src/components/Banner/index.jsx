import styles from './Banner.module.css';
import fotoBanner from '../../assets/banner.png'
const Banner = () => {
    return(
        <>
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                Colecionáveis!
                </h1>
                <p className={styles.paragrafo}>
               Conheça a nossa sessão de itens colecionáveis!!!
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.minhaFoto}
                    src={fotoBanner}
                    alt="Rhaenyra Targaryen"
                    />
            </div>
        </div>
        </>
    );
}
export default Banner;