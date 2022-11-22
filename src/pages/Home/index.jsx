import React from 'react';
import styles from './Home.module.css';
import categorias from '../../json/categoria.json';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: "none",
  color: 'black',
  fontSize: '10px',
  cursor: 'pointer',
}
const Home = () => {
  return (
      <div className={styles.post}>
          {categorias.map((categoria) => {
        return <Link style={linkStyle}to={`/categoria/${categoria.id}`}>
               <h1 className={styles.titulo}>{categoria.categoria}</h1>
          <img className={styles.capa} src={categoria.imagemUrl} alt="categoria" height="100px" />
        </Link>
      })}
      </div>
    
  );
}

export default Home;
