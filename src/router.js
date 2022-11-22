import PaginaPadrao from './components/PaginaPadrao';
import Home from './pages/Home';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categoria from './pages/Categoria';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home />} />
        </Route> 
        <Route path='/categoria/:categoriaId' element={<Categoria />} />
      </Routes>
    </BrowserRouter>
  );
}

