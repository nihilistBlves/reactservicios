import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';


export default class EmpleadosRouter extends Component {
    
    state = {
        empleados: [],
        status: false
    }

    cargarEmpleados = () => {
        var request = "/api/empleados";
        var url = Global.urlEmpleados + request;
        axios.get(url).then(response => {
            this.setState({
                empleados: response.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarEmpleados();
    }

    render() {
        return (
            <div>
                <h1>Empleados Router Parametros</h1>
                <ul>
                    {this.state.status && 
                        this.state.empleados.map((empleado, index) => {
                            return(<li key={index}><NavLink to={"/detallesempleado/"+empleado.idEmpleado}>{empleado.apellido}</NavLink></li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
