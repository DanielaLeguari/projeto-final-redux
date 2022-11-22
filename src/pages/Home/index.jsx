import React from 'react';
import styles from './Home.module.css';
import categorias from '../../json/categoria.json';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div> Essa é a home</div>
      {categorias.map((categoria) => {
        return <Link to={`/categoria/${categoria.id}`}>
          <img src={categoria.imagemUrl} alt="categoria" height="100px" />
        </Link>
      })}
    </div>
  );
}

export default Home;
