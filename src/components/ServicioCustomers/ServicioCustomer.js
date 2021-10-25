import React, { Component } from 'react'
//AGREGAR LIBRERIA axios
import axios from 'axios'
//PARA IMPORTAR VARIABLES GLOBALES
import Global from '../../Global';

export default class ServicioCustomers extends Component {
    //ALMACENAMOS LA URL DEL SERVICIO A CONSUMIR
    urlNorthwind = Global.urlNorthwind;

    state = {
        customers: []
    }

    cargarCustomers = () => {
        var request = "/customers?format=json";
        axios.get(this.urlNorthwind + request).then(response => {
            console.log(response.data);
            this.setState({
                customers: response.data.results
            });
        }); 
    }

    //SOLO QUEREMOS CARGAR LOS CLIENTES AL INICIAR LA PAGINA
    componentDidMount = () => {
        this.cargarCustomers();
        
    }

    render() {
        return (
            <div>
                <h1>Servicio API Customers</h1>
                {this.state.customers.map((customer, index) => {
                    return(<h2 style={{color:"lightseagreen"}} key={customer.id}>
                        {customer.contactName}
                    </h2>);
                })}
            </div>
        )
    }
}
