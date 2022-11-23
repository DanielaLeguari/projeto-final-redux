import CardColecionavel from '../../components/CardColecionavel';
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styles from './Categoria.module.css';
import BannerCategoria from 'components/BannerCategoria';
import { useSelector } from 'react-redux';

const Categoria = () => {
    const { categoriaId } = useParams();
    const { categoria, itens } = useSelector(state => {
        const regexp = new RegExp(state.busca, 'i');
        return {
            categoria: state.categorias.find(categoria => categoria.id === categoriaId),
            itens: state.itens.filter(item => item.categoria === categoriaId && item.titulo.match(regexp))
        }
    });

    return (
        <>
            <Header />

            {categoria === undefined ?
                <h1 className={styles.categoriaInvalida}>Categoria inválida</h1>
                :
                <>
                    <BannerCategoria {...categoria} />
                    <div className={styles.categoria}>
                        <div className={styles.posts}>
                            {itens.map(item => {
                                return <CardColecionavel {...item} />
                            })}
                        </div>
                    </div>
                </>
            }

            <Footer />

        </>
    );
}

export default Categoria;
