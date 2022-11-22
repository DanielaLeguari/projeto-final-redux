import React from 'react';
import styles from './PaginaPadrao.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';

const PaginaPadrao = () => {
  return (
    <>
    <Header />
    <Footer/>
    </>
    // <div>
    //   <Navbar/>
    //   <Header/>
    //   <h1>Página padrão</h1>
    //   <Outlet />
    // </div>
  );
}

export default PaginaPadrao;
