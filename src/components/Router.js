import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TablaDepartamentos from './Departamentos/TablaDepartamentos';
import InsertarDepartamento from './Departamentos/InsertarDepartamento';
import MenuDepartamentos from './Departamentos/MenuDepartamentos';
import DetallesDepartamento from './Departamentos/DetallesDepartamento';
import UpdateDepartamento from './Departamentos/UpdateDepartamento';
import EliminarDepartamento from './Departamentos/EliminarDepartamento';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuDepartamentos/>
                <Switch>
                    <Route exact path="/" component={TablaDepartamentos}/>
                    <Route exact path="/departamentos/nuevo" component={InsertarDepartamento}/>
                    <Route exact path="/departamentos/:numero" render={props => {
                        var numero = props.match.params.numero;
                        return <DetallesDepartamento numero={numero}/>
                    }}/>
                    <Route exact path="/departamentos/:numero/editar" render={props => {
                        var numero = props.match.params.numero;
                        return <UpdateDepartamento numero={numero}/>
                    }}/>
                    <Route exact path="/departamentos/:numero/eliminar" render={props => {
                        var numero = props.match.params.numero;
                        return <EliminarDepartamento numero={numero}/>
                    }}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
