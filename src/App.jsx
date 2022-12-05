import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  state={
    Person:{
      FullName:'omar gargouri',
      bio:'businessman',
      profession:'ingenieur',
      image:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/6/6/d/66da29be61_99905_google-images-rechercher.jpg'
    },
    Shows:true,
    counter:0
  }
  handleShows=()=>this.setState({Shows:!this.state.Shows})
  increment=()=>this.setState({counter:this.state.counter+1})
  componentDidMount(){
    setInterval(() => {
      this.increment()
    }, 1000);
  }
  
  render() {
    return (
      <div className='App'>
      
        <button onClick={this.handleShows}>{this.state.Shows?'hide':'show'}</button>
      
        {

      this.state.Shows &&
        <div>
          <h2>counter:{this.state.counter}</h2>
        <h2>Name:{this.state.Person.FullName} <br/>
        bio:{this.state.Person.bio} <br/>
        profession:{this.state.Person.profession} <br/>
        </h2>
        <img width='60%' src="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/6/6/d/66da29be61_99905_google-images-rechercher.jpg" alt="" />
        
      </div>
  }
      </div>
    )
  }
}
