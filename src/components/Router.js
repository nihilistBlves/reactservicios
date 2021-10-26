import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TablaDepartamentos from './Departamentos/TablaDepartamentos';
import InsertarDepartamento from './Departamentos/InsertarDepartamento';
import MenuDepartamentos from './Departamentos/MenuDepartamentos';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuDepartamentos/>
                <Switch>
                    <Route exact path="/" component={TablaDepartamentos}/>
                    <Route exact path="/departamentos/nuevo" component={InsertarDepartamento}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
