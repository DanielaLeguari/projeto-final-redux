import CardColecionavel from '../../components/CardColecionavel';
import React from 'react';
import { useParams } from 'react-router-dom';
import colecionaveis from '../../json/colecionaveis.json';

const Categoria = () => {
    const { categoriaId } = useParams();
    return (
        <div>
            {categoriaId}
            {colecionaveis.filter(item => item.categoriaId === Number(categoriaId)).map(item => {
                return <CardColecionavel {...item}/> //espalhando direto
            })}

        </div>
    );
}

export default Categoria;
