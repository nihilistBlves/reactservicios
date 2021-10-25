import React, { Component } from 'react';
import Global from '../../Global';
import axios from 'axios';

export default class DepartamentosEmpleados extends Component {

    selectDepartamentos = React.createRef();

    state = {
        departamentos: [],
        empleados: [],
        status: false
    }

    cargarDepartamentos = () => {
        var request = "/api/departamentos";
        axios.get(Global.urlDepartamentos + request).then(response => {
            this.setState({
                departamentos: response.data,
                status: true
            });
        });
    }

    buscarEmpleados = (e) => {
        e.preventDefault();
        var numDepartamento = this.selectDepartamentos.current.value;
        var request = "/api/Empleados/EmpleadosDepartamento/" + numDepartamento;
        axios.get(Global.urlEmpleados + request).then(response => {
            this.setState({
                empleados: response.data,
            });
        });
    }

    componentDidMount = () => {
        this.cargarDepartamentos();
    }

    render() {
        return (
            <div>
                <h1>Departamentos - Empleados</h1>
                <hr/>
                <form onSubmit={this.buscarEmpleados}>
                    <select ref={this.selectDepartamentos}>
                    {this.state.status && (
                        this.state.departamentos.map((departamento, index) => {
                            return(<option key={index} value={departamento.Numero}>{departamento.Numero + " - " + departamento.Nombre}</option>);
                    })
                )}
                    </select>
                    <button>Mostrar empleados</button>
                </form>
                <hr/>
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
