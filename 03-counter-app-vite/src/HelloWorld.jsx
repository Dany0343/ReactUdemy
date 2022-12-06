// Usualmente todo en React comienza con un componente o un functional component, no son más que una función, son basados en funciones, también se trabaja con clases pero ya no son aconsejadas de trabajar en React, son compatibles pero se acostumbra trabajar con functional components


// function App() { // Todos los nombres de los functional components van con Pascal Case o Upper Camel Case, normalmente este componente no está aquí porque el hot reload de Vite lo está actualizando todo el tiempo

//     return (<h1>Hola mundo! Este es mi primer functional component en React</h1>);
// }

// HelloWorldApp functional component
export const HelloWorldApp = () => {
  return (
    <h1>Hello World App</h1>
  )
}


// export default App
// De igual forma se puede exportar de manera manual cada cosa, para poder importar uno por uno en main.jsx