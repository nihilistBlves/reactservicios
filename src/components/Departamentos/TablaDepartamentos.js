import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

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

    componentDidMount = () => {
        this.cargarDepartamentos();
    }

    render() {
        if (this.state.status) {
            return (
                <div className="row">
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
