import React, { Component } from 'react'

import './styles.css'

class Converter extends Component {

  state = {
    moedas: ['BRL', 'USD', 'AUD', 'SGD', 'PHP', 'EUR'],
    base: 'USD',
    quantidade: '',
    convertTo: 'BRL',
    resultado: '',
    date: ''
  };

  handleSelect = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      resultado: null,
    },
      this.calcular);
  };

  handleInput = (e) => {
    this.setState({
      quantidade: e.target.value,
      resultado: null
    },
      this.calcular
    );
  };

  handleSwap = (e) => {
    const base = this.state.base
    const convertTo = this.state.convertTo
    e.preventDefault();
    this.setState({
      convertTo: base, base: convertTo,
      resultado: null
    },
      this.calcular)
  }

  calcular = () => {
    const quantidade = this.state.quantidade;
    if (quantidade === isNaN) {
      return
    } else {
      fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then(res => res.json())
        .then(data => {
          const date = data.date;
          const resultado = (data.rates[this.state.convertTo] * quantidade).toFixed(3)
          this.setState({
            resultado,
            date
          })
        });
    }
  }


  render() {
    const { moedas, base, quantidade, convertTo, resultado, date } = this.state;
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card card-body">

              <h5>
                {quantidade} {base} é equivalente a
              </h5>

              <h2>
                <span className="quantCor">{resultado === null ? "Calculando..." : resultado}</span> {convertTo}
              </h2>

              <p>
                A partir de <span className="dataCor">{date}</span>
              </p>

              <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-10">

                  <form className="form-inline mb-4">
                    <input
                      type="number"
                      value={quantidade}
                      onChange={this.handleInput}
                      className="form-control form-control-lg mx-3"></input>
                    <select
                      name="base"
                      value={base}
                      onChange={this.handleSelect}
                      className="form control form-control-lg">
                      {moedas.map(moeda =>
                        <option key={moeda} value={moeda}>
                          {moeda}
                        </option>)
                      }
                    </select>
                  </form>

                  <form className="form-inline mb-4">
                    <input
                      disabled={true}
                      value={
                        resultado === null ? 'Calculando...' : resultado
                      }
                      className="form-control form-control-lg mx-3"></input>
                    <select
                      name="convertTo"
                      value={convertTo}
                      onChange={this.handleSelect}
                      className="form control form-control-lg">
                      {moedas.map(moeda =>
                        <option key={moeda} value={moeda}>
                          {moeda}
                        </option>)
                      }
                    </select>
                  </form>

                </div>

                <div className="col-lg-2 col-md-2 col-sm-2 align-self-center">
                  <h1 onClick={this.handleSwap} className="swap">&#8595;&#8593;</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Converter;