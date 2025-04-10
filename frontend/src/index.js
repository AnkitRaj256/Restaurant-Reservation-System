import React from 'react';
import App from './App.js';
import { createRoot } from 'react-dom/client';
import './styles/global.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
