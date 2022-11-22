import React from 'react';
import styles from './Home.module.css';
import categorias from '../../json/categoria.json';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: "none",
  color: 'white',
  fontSize: '10px',
  cursor: 'pointer',
}
const Home = () => {
  return (
      <div className={styles.post}>
          {categorias.map((categoria) => {
        return <Link style={linkStyle}to={`/categoria/${categoria.id}`}>
          <img className={styles.capa} src={categoria.imagemUrl} alt="categoria" height="100px" />
          <h1>{categoria.categoria}</h1>
        </Link>
      })}
      </div>
    
  );
}

export default Home;
