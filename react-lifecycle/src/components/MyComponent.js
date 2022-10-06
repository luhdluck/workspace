import React, { Component } from "react";

class MyComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = { number: 5 }
        this.addNumber = this.addNumber.bind(this)
    
        console.log('constructor...')
      }
    
      static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps...')
        return null
      }
    
      componentDidMount() {
        console.log('componentDidMount...')
      }
    
      shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate...')
        console.log('current state', this.state)
        console.log('next state', nextState)
        return true
      }
    
      componentDidUpdate() {
        console.log('componentDidUpdate...')
      }
    
      addNumber() {
        console.log('setState...')
        let currentNumber = this.state.number
        currentNumber += 1
        this.setState({ number: currentNumber })
      }
    
      render() {
        console.log('render...')
        return <div>
          <p>{this.props.title}</p>
          <p>{this.state.number}</p>
    
          <button onClick={this.addNumber}>
            Add Number
          </button>
        </div>
      }
    }

export default MyComponent;