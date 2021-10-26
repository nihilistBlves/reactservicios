import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class InsertarDepartamento extends Component {

    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLoc = React.createRef();

    state = {
        mensaje: "",
        tipo: "red",
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
                mensaje: "Insertado correctamente",
                tipo: "green",
                status: true
            });
        });

    }

    render() {
        return (
            <div>
                <h1>Insertar departamento</h1>
                {this.state.status &&
                    <h2 style={{color:this.state.tipo}}>{this.state.mensaje}</h2>
                }
                <form onSubmit={this.insertarDepartamento}>
                    <div className="mb-3">
                        <label className="form-label">Número</label>
                        <input type="number" class="form-control" ref={this.cajaNumero} placeholder="Introduzca un número"/>
                        <label className="form-label">Nombre</label>
                        <input type="text" class="form-control" ref={this.cajaNombre} placeholder="Introduzca un nombre"/>
                        <label className="form-label">Localidad</label>
                        <input type="text" className="form-control" ref={this.cajaLoc} placeholder="Introduzca una localidad"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Insertar departamento</button>
                </form>
            </div>
        )
    }
}
