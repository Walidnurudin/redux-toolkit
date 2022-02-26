import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Detail } from './pages';
import { Header } from './components';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
