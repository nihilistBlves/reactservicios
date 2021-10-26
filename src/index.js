import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import ServicioCustomers from './components/ServicioCustomers/ServicioCustomer';
import BuscadorCustomer from './components/BuscadorCustomer/BuscadorCustomer';
import BuscadorCoches from './components/BuscadorCoches/BuscadorCoches';
import DepartamentosEmpleados from './components/DepartamentosEmpleados/DepartamentosEmpleados';
import Router from './components/Router'
import EmpleadosRouter from './components/RutasEmpleadosParametros/EmpleadosRouter';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <App/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
