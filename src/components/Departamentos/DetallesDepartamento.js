import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class DetallesDepartamento extends Component {

    state = {
        departamento: {},
        status: false
    }

    cargarDepartamento = () => {
        var request = "/webresources/departamentos/" + this.props.numero;
        var url = Global.urlCrudDepartamentos + request;
        axios.get(url).then(response => {
            this.setState({
                departamento: response.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarDepartamento();
    }

    render() {
        return (
            <div className="row m-3">
                {this.state.status && 
                    <div className="col text-center">
                        <ul className="list-group">
                            <li className="list-group-item active" aria-current="true">Departamento {this.state.departamento.numero}</li>
                            <li className="list-group-item">{this.state.departamento.nombre}</li>
                            <li className="list-group-item">{this.state.departamento.localidad}</li>
                        </ul>
                        <NavLink className="btn btn-success" to={"/departamentos/" + this.state.departamento.numero + "/editar"}>
                            Editar
                        </NavLink>
                        <NavLink className="btn btn-secondary m-3" to="/">Volver</NavLink>
                    </div>
                }
            </div>
        )
    }
}
