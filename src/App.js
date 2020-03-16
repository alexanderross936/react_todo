import React, { setState, Component } from 'react';

import './App.css';



class App extends Component{



    state = {
      isClicked: false,
      value: '',
      list: []
    }
  
changeText = event => {
  this.setState({
    value: event.target.value
  })
}

handleSubmit = () => {
  this.setState(state => {
    const list = state.list.push(state.value)
  })
  this.setState({
    value: ''
  })

}

clicker = () => {
  this.setState({
  isClicked: true
})
//  console.log(this.state.isClicked)
console.log(this.state.isClicked)
}
render(){
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.value} onChange={this.changeText} />
    <button type="button" onClick={this.handleSubmit} disabled={!this.state.value}>Submit</button>
      </form>
      <button onClick={this.clicker}>Change state!</button>
      <ol>{this.state.list.map(item => (
        <li key={item}>{item}</li>
      ))}</ol>
    </div>
  );
}

}

export default App;
