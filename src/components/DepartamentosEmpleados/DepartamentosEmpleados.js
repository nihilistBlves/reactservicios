import React, { Component } from 'react';
import Global from '../../Global';
import axios from 'axios';
import Empleados from './Empleados';

export default class DepartamentosEmpleados extends Component {

    selectDepartamentos = React.createRef();

    state = {
        departamentos: [],
        status: false
    }

    cargarDepartamentos = () => {
        var request = "/api/departamentos";
        axios.get(Global.urlDepartamentos + request).then(response => {
            this.setState({
                departamentos: response.data,
                status: true,
                idDepartamento: 0
            });
        });
    }

    buscarEmpleados = (e) => {
        e.preventDefault();
        var idDepartamento = this.selectDepartamentos.current.value;
        this.setState({
            idDepartamento: idDepartamento
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
                {this.state.idDepartamento != 0 &&
                <Empleados idDepartamento={this.state.idDepartamento}/>}
                
            </div>
        )
    }
}
