import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
	hydrateRoot(rootElement, <App />);
} else {
	createRoot(rootElement).render(<App />);
}
