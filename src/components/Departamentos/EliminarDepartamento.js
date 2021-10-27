import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import Global from '../../Global'
import axios from 'axios'

export default class EliminarDepartamento extends Component {

    state = {
        departamento: {},
        carga: false,
        status: false
    }



    eliminarDepartamento = (e) => {
        e.preventDefault();
        var request = "/webresources/departamentos/delete/" + this.state.departamento.numero;
        var url = Global.urlCrudDepartamentos + request;
        axios.delete(url).then(response => {
            this.setState({
                status: true
            });
        });
    }

    cargarDepartamento = () => {
        var request = "/webresources/departamentos/" + this.props.numero;
        var url = Global.urlCrudDepartamentos + request;
        axios.get(url).then(response => {
            this.setState({
                departamento: response.data,
                carga: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarDepartamento();
    }

    render() {
        if(this.state.status) {
            return(<Redirect to="/"/>);
        }
        return (
            <div className="row m-3">
                <div className="col">
                    <h2>¿Desea eliminar el siguiente departamento?</h2>
                    {this.state.carga ? 
                        <form onSubmit={this.eliminarDepartamento}>
                            <div className="mb-3">
                                <label className="form-label">Número</label>
                                <input type="number" disabled className="form-control" value={this.props.numero}/>
                                <label className="form-label">Nombre</label>
                                <input type="text" disabled className="form-control" value={this.state.departamento.nombre}/>
                                <label className="form-label">Localidad</label>
                                <input type="text" disabled className="form-control" value={this.state.departamento.localidad}/>
                            </div>
                            <button className="btn btn-danger">Eliminar departamento</button>
                            <NavLink className="btn btn-secondary m-3" to="/">Volver</NavLink>
                        </form> :
                        <h2>Cargando...</h2>
                    }
                </div>
            </div>
        )
    }
}
