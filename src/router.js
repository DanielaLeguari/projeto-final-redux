import PaginaPadrao from './components/PaginaPadrao';
import Home from './pages/Home';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categoria from './pages/Categoria';
import PaginaErro from 'pages/PaginaErro';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<PaginaPadrao />}>
          <Route path='/home' element={<Home />} />
        </Route>  */}
         <Route path='/' element={<Home />} />
        <Route path='/categoria/:categoriaId' element={<Categoria />} />
        <Route path="*" element={<PaginaErro/>} />
      </Routes>
    </BrowserRouter>
  );
}

