import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import { NavLink } from 'react-router-dom'

export default class TablaDepartamentos extends Component {

    state = {
        departamentos: [],
        status: false
    }

    cargarDepartamentos = () => {
        var request = "/webresources/departamentos";
        var url = Global.urlCrudDepartamentos + request;
        axios.get(url).then(response => {
            this.setState({
                departamentos: response.data,
                status: true
            });
        });
    }

    eliminarDepartamento = (numero) => {
        var request = "/webresources/departamentos/delete/" + numero;
        var url = Global.urlCrudDepartamentos + request;
        axios.delete(url).then(response =>  {
            this.componentDidMount();
        });
    }

    componentDidMount = () => {
        this.cargarDepartamentos();
    }

    render() {
        if (this.state.status) {
            return (
                <div className="row m-3">
                    <div className="col">
                        <h1 className="h1">Tabla departamentos</h1>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Localidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.departamentos.map((departamento, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{departamento.numero}</td>
                                            <td>{departamento.nombre}</td>
                                            <td>{departamento.localidad}</td>
                                            <td>
                                                <NavLink className="btn btn-primary" to={"/departamentos/" + departamento.numero}>
                                                    Detalles
                                                </NavLink>
                                            </td>
                                            <td>
                                                <NavLink className="btn btn-success" to={"/departamentos/" + departamento.numero + "/editar"}>
                                                    Editar
                                                </NavLink>
                                            </td>
                                            <td>
                                                <NavLink className="btn btn-danger" to={"/departamentos/" + departamento.numero + "/eliminar"}>
                                                    Eliminar
                                                </NavLink>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } else {
            return (<h1>Cargando departamentos...</h1>)
        }
        
    }
}
