import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class BuscadorCoches extends Component {

    urlCoches = Global.urlCoches;

    cajaBuscar = React.createRef();

    state = {
        coches: [],
        temp: [],
        status: false
    }

    cargarCoches = (e) => {
        if (e != null) {
            e.preventDefault();
        }
        var request = "/webresources/coches";
        axios.get(this.urlCoches + request).then(response => {
            this.setState({
                coches: response.data,
                temp: response.data,
                status: true
            });
        });
    }

    buscarCochePorMarca = (e) => {
        e.preventDefault();
        var cochesFiltrados = [];
        this.state.coches.map((coche, index) => {
            if (coche.marca.includes(this.cajaBuscar.current.value.toUpperCase())) {
                cochesFiltrados.push(coche);
            }
        });
        this.setState({
            temp: cochesFiltrados,
            status: true
        });
    }

    componentDidMount = () => {
        this.cargarCoches();    
    }

    render() {
        return (
            <div>
                <h1>Buscador de coches</h1>
                <hr/>
                <form onSubmit={this.cargarCoches}>
                    <button>Cargar coches</button>
                </form>
                <hr/>
                <form onSubmit={this.buscarCochePorMarca}>
                    <label>Introduzca una marca: </label>
                    <input type="text" ref={this.cajaBuscar}/>
                    <button>Buscar</button>
                </form>
                <hr/>
                {this.state.status && (
                    <table border="1px">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Conductor</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.temp.map((coche, index) => {
                                return(<tr key={index}>
                                    <td>{coche.idcoche}</td>
                                    <td>{coche.marca}</td>
                                    <td>{coche.modelo}</td>
                                    <td>{coche.conductor}</td>
                                    <td><img src={coche.imagen} style={{height:"50px"}}/></td>

                                </tr>);
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        )
    }
}
