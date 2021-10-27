import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global';
import { Redirect, NavLink } from 'react-router-dom';

export default class UpdateDepartamento extends Component {

    cajaNombre = React.createRef();
    cajaLoc = React.createRef();

    state = {
        departamento: {},
        carga: false,
        status: false
    }

    updateDepartamento = (e) => {
        e.preventDefault();
        var request = "/webresources/departamentos/put";
        var url = Global.urlCrudDepartamentos + request;
        var departamento = {
            numero: parseInt(this.props.numero),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLoc.current.value
        }
        axios.put(url, departamento).then(response => {
            this.setState({
                status: true
            });
        });
    }

    rellenarCajas = () => {
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
        this.rellenarCajas();
    }

    render() {
        if(this.state.status) {
            return(<Redirect to="/"/>);
        }
        return (
            <div className="row m-3">
                <div className="col">
                    <h1>Editar departamento</h1>
                    {this.state.carga ?
                        <form onSubmit={this.updateDepartamento}>
                            <div className="mb-3">
                                <label className="form-label">Número</label>
                                <input type="number" disabled className="form-control" value={this.props.numero}/>
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" ref={this.cajaNombre} placeholder="Introduzca un nombre" defaultValue={this.state.departamento.nombre}/>
                                <label className="form-label">Localidad</label>
                                <input type="text" className="form-control" ref={this.cajaLoc} placeholder="Introduzca una localidad" defaultValue={this.state.departamento.localidad}/>
                            </div>
                            <button className="btn btn-success">Editar departamento</button>
                            <NavLink className="btn btn-secondary m-3" to="/">Volver</NavLink>
                        </form> :
                        <h2>Cargando...</h2>
                    }
                </div>
            </div>
        )
    }
}
