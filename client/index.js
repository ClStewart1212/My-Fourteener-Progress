import React from 'react';
import { render, createRoot } from 'react-dom/client';
import App from './App.jsx';
import styles from './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
