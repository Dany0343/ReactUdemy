import React from 'react';
import ReactDOM from 'react-dom/client';

// Con esos dos elementos se puede renderizar la aplicación

// Usualmente todo en React comienza con un componente o un functional component, no son más que una función, son basados en funciones, también se trabaja con clases pero ya no son aconsejadas de trabajar en React, son compatibles pero se acostumbra trabajar con functional components

function App() { // Todos los nombres de los functional components van con Pascal Case o Upper Camel Case, normalmente este componente no está aquí porque el hot reload de Vite lo está actualizando todo el tiempo

    return <h1>Hola mundo!</h1>;
}

// Se procede a Renderizar
// Pero antes de renderizar el APP se renderiza el modo estricto

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)