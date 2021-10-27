import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';
import {Redirect, NavLink} from 'react-router-dom';

export default class InsertarDepartamento extends Component {

    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLoc = React.createRef();

    state = {
        status: false
    }

    insertarDepartamento = (e) => {
        e.preventDefault();
        var num = parseInt(this.cajaNumero.current.value);
        var nom = this.cajaNombre.current.value;
        var loc = this.cajaLoc.current.value;
        var dep = {
            numero: num,
            nombre: nom,
            localidad: loc
        }
        var request = "/webresources/departamentos/post";
        var url = Global.urlCrudDepartamentos + request;
        axios.post(url, dep).then(response => {
            this.setState({
                status: true
            });
        });

    }

    render() {
        if (this.state.status) {
            return(<Redirect to="/"/>);
        }
        return (
            <div className="row m-3">
                <div className="col">
                    <h1>Insertar departamento</h1>
                    <form onSubmit={this.insertarDepartamento}>
                        <div className="mb-3">
                            <label className="form-label">Número</label>
                            <input type="number" class="form-control" ref={this.cajaNumero} placeholder="Introduzca un número"/>
                            <label className="form-label">Nombre</label>
                            <input type="text" class="form-control" ref={this.cajaNombre} placeholder="Introduzca un nombre"/>
                            <label className="form-label">Localidad</label>
                            <input type="text" className="form-control" ref={this.cajaLoc} placeholder="Introduzca una localidad"/>
                        </div>
                        <button type="submit" className="btn btn-success">Insertar departamento</button>
                        <NavLink className="btn btn-secondary m-3" to="/">Volver</NavLink>
                    </form>
                </div>
            </div>
        )
    }
}
