import React, { Component } from 'react';
import './Calculador.css';

class Calculador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      porcentaje: 5.4,
      fijo: 0.30,
      resultado: 0,
      accion: 'RECIBE',
    }

    this.feeds = 0;
    this.cantidad = 0;
    this.operacion = 1;
    this.change = this.change.bind(this);
    this.accion = this.accion.bind(this);
  }

  change(event) {
    this.operacion = event.target.value;
    if (event.target.value == 1) {
      this.setState({accion: 'RECIBE'});
      this.enviar();
    }

    else if (event.target.value == 2){
      this.setState({accion: 'ENVIA'});
      this.recibir();
    }
}

  accion(event) {

    this.cantidad = event.target.value;

    if(this.operacion == 1 && this.cantidad > 0){
      this.enviar();
    }

    else if(this.operacion == 2 && this.cantidad > 0) {
      this.recibir();
    }

    else{
      this.feeds = 0;
      this.setState({resultado: 0});
    }
  }

  enviar(){
    if(this.cantidad > 0){
      console.log('Operacion 1');
      this.feeds = this.state.fijo + (this.cantidad * this.state.porcentaje)/100;
      this.setState({resultado: this.cantidad - this.feeds});
    }
  }

  recibir(){
    if(this.cantidad > 0){
      console.log('Operacion 2');
      this.feeds = ((parseFloat(this.cantidad)+ this.state.fijo)*100)/(100 - this.state.porcentaje) - this.cantidad;
      this.setState({resultado: ((parseFloat(this.cantidad)+ this.state.fijo)*100)/(100 - this.state.porcentaje)});
    }
  }

  render() {
    return(
       <div className="Calculador">
        <select className="Accion" onChange={this.change}>
          <option value="1">ENVIAR</option>
          <option value="2">RECIBIR</option>
        </select><br /> 

        <div className="Cantidad">CANTIDAD <input type="number" onChange={this.accion} placeholder='0,00' min="0" max="9999"/> $</div>
        <div className="Comision">COMISION <input type="number" value={this.feeds.toFixed(2)} min="0" max="9999"/> $</div>
        <div className="Operacion">{this.state.accion} <input type="number" value={this.state.resultado.toFixed(2)} min="0" max="9999"/> $</div> 

        <span className="Feeds">Las Comisiones de PayPal es de<input type="number" placeholder={this.state.porcentaje} min="1" max="10"/>% + <input type="number" placeholder={this.state.fijo} min="1" max="10"/>$USD</span>

      </div>
    )
  }
}

export default Calculador;