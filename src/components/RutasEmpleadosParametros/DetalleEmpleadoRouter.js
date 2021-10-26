import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';

export default class DetalleEmpleadoRouter extends Component {

    state = {
        empleado: {},
        status: false
    }

    cargarEmpleado = () => {
        var id = this.props.id;
        var request = "/api/empleados/" + id;
        var url = Global.urlEmpleados + request;
        axios.get(url).then(response => {
            this.setState({
                empleado: response.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarEmpleado();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.id != this.props.id) {
            this.cargarEmpleado();
        }
    }

    render() {
        return (
            <div>
                <h1>Detalles empleado</h1>
                {this.state.status &&
                    <div>
                        <h2>{this.state.empleado.idEmpleado}</h2>
                        <h2>{this.state.empleado.apellido}</h2>
                        <h2>{this.state.empleado.oficio}</h2>
                        <h2>{this.state.empleado.salario}</h2>
                        <h2>{this.state.empleado.departamento}</h2>
                    </div>
                }
            </div>
        )
    }
}
