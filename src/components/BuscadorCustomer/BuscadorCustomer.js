import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class BuscadorCustomer extends Component {

    urlNorthwind = Global.urlNorthwind;

    cajaBuscar = React.createRef();

    state = {
        customer: {},
        status: false
    }

    buscarCustomer = (e) => {
        e.preventDefault();
        var idBuscado = this.cajaBuscar.current.value;
        var request = "/customers/" + idBuscado;
        var url = this.urlNorthwind + request;
        axios.get(url).then(response => {
            this.setState({
                customer : response.data.customer,
                status: true
            });
        })
    }

    render() {
        return (
            <div>
                <h1>Buscador Customer</h1>
                <form onSubmit={this.buscarCustomer}>
                    <label>Introduzca un ID Customer: </label>
                    <input type="text" ref={this.cajaBuscar} required/>
                    <button>Buscar</button>
                </form>
                <hr/>
                {this.state.status &&
                    (<div>
                        <h2>Company: {this.state.customer.companyName}</h2>
                        <h2>Contact Name: {this.state.customer.contactName}</h2>
                        <h2>Contact Title: {this.state.customer.contactTitle}</h2>
                        <h2>Address: {this.state.customer.address}</h2>
                        <h2>City: {this.state.customer.city}</h2>
                    </div>)}

            </div>
        )
    }
}
