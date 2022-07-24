import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom/client';
import Content from './pages/Content/Content';
import Title from './pages/Title/Title';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Title />
    <Content />
  </React.StrictMode>
);