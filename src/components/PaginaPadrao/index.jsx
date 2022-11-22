import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BannerCarrinho from '../BannerCarrinho';
import Home from 'pages/Home';
import CardCompra from '../CardCompra'

const PaginaPadrao = () => {
  return (
    <div>
      <Header/>
      <BannerCarrinho /> 
      <CardCompra />
       <Home />
    <Footer/> 
    </div>
  );
}

export default PaginaPadrao;
