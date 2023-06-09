import { createRoot } from 'react-dom/client';
import App from './components/App/App'
import React from 'react';
import './globalStyles';

const root = createRoot(document.getElementById('app'));

root.render(<App />);