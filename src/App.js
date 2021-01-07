import React from 'react';
// Dependencias
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Componentes
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

// State
import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareasState';

function App() {


  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
              <Route exact path="/proyectos" component={Proyectos} />
            </Switch>
          </Router>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
