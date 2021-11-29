import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';

const App = () => {

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
