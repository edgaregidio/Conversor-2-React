import React, { Component } from 'react'

import './styles.css'

class Converter extends Component {

  state = {
    moedas: [],
  }


  render() {
    return (
      <div className="card card-body">
        <h5>1 USD é equivalente a</h5>
        <h2>1.87 BRL</h2>
        <p>A partir de 2020</p>
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-10">
            <form className="form-inline mb-4">
              <input className="form-control form-control-lg mx-3"></input>
              <select className="form control form-control-lg">
                <option>1 Opção</option>

              </select>
            </form>
            <form className="form-inline mb-4">
              <input className="form-control form-control-lg mx-3"></input>
              <select className="form control form-control-lg">
                <option>1 Opção</option>

              </select>
            </form>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-2 align-self-center">
            <h1 className="swap">&#8595;&#8593;</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Converter;