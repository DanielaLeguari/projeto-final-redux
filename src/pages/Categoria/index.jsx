import CardColecionavel from '../../components/CardColecionavel';
import React from 'react';
import { useParams } from 'react-router-dom';
import colecionaveis from '../../json/colecionaveis.json';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styles from './Categoria.module.css';
import BannerCategoria from 'components/BannerCategoria';

const Categoria = () => {
    const { categoriaId } = useParams();
    return (
        <>
            <Header />
            <BannerCategoria/>
          
                <div className={styles.posts}>
                    {categoriaId}
                    {colecionaveis.filter(item => item.categoriaId === Number(categoriaId)).map(item => {
                        return <CardColecionavel {...item} /> //espalhando direto
                    })}
                </div>

        
            <Footer />

        </>
    );
}

export default Categoria;
