// Con esos dos elementos se puede renderizar la aplicación
import React from 'react';
import ReactDOM from 'react-dom/client';

import { CounterApp } from './CounterApp';
// import { FirstApp } from './FirstApp';
import './styles.css'


// Se procede a Renderizar
// Pero antes de renderizar el APP se renderiza el modo estricto

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={ 20 }/>
    </React.StrictMode>
)