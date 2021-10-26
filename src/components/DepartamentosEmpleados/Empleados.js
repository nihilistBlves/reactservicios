import React, { Component } from 'react';
import Global from '../../Global';
import axios from 'axios';

export default class Empleados extends Component {

    state = {
        empleados: [],
        status: false
    }

    cargarEmpleados = () => {
        var numDepartamento = this.props.idDepartamento;
        var request = "/api/Empleados/EmpleadosDepartamento/" + numDepartamento;
        axios.get(Global.urlEmpleados + request).then(response => {
            this.setState({
                empleados: response.data,
            });
        });
    }

    componentDidMount = () => {
        this.cargarEmpleados();
    }

    //SOLUCIONAR BUCLE INFINITO
    componentDidUpdate = (oldProps) => {
       if (oldProps.idDepartamento != this.props.idDepartamento) {
            this.cargarEmpleados();
       }
    }

    render() {
        return (
            <div>
                {this.state.empleados.length > 0 && (
                <table border="2">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                            <th>Departamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.empleados.map((empleado, index) => {
                            return(<tr key={index}>
                                <td>{empleado.idEmpleado}</td>
                                <td>{empleado.apellido}</td>
                                <td>{empleado.oficio}</td>
                                <td>{empleado.salario}</td>
                                <td>{empleado.departamento}</td>
                            </tr>);
                        })}
                    </tbody>
                </table>
                )}
            </div>
        )
    }
}
