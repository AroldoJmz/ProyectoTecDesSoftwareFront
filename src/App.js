import 'bootstrap/dist/css/bootstrap.min.css';
import Boton from './Componentes/Boton';
import ListaUsuarios from './Componentes/ListaUsuarios';
import { useState, useEffect } from 'react';

function App() {
  return (
    <> 
    <div>
      <ListaUsuarios></ListaUsuarios>
    </div>
    </>
  )
}

export default App;
