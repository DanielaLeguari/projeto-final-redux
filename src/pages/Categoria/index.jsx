import CardColecionavel from '../../components/CardColecionavel';
import React from 'react';
import { useParams } from 'react-router-dom';
import colecionaveis from '../../json/colecionaveis.json';
import categorias from '../../json/categoria.json';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styles from './Categoria.module.css';
import BannerCategoria from 'components/BannerCategoria';

const Categoria = () => {
    const { categoriaId } = useParams();
    const categoriasFiltradas = categorias.filter(item => item.id === Number(categoriaId));
    return (
        <>
            <Header />
            {categoriasFiltradas === undefined || categoriasFiltradas.length === 0 ?
                <h1 className={styles.categoriaInvalida}>Categoria inválida</h1>
                :
                <>
                    <BannerCategoria {...categoriasFiltradas[0]} />
                    <div className={styles.posts}>
                        {colecionaveis.filter(item => item.categoriaId === Number(categoriaId)).map(item => {
                            return <CardColecionavel {...item} /> //espalhando direto
                        })}
                    </div>
                </>
            }

            <Footer />

        </>
    );
}

export default Categoria;
