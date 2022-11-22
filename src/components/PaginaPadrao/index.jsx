import React from 'react';
import styles from './PaginaPadrao.module.css';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';
import Banner from '../Banner';
import Home from 'pages/Home';

const PaginaPadrao = () => {
  return (
    <div>
      <Header/>
      <Banner />
      <Home />
    <Footer/> 
    </div>
  );
}

export default PaginaPadrao;
