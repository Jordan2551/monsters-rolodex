import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list'
import './App.css';
import {SearchBox} from './components/search-box/search-box';



class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  handleChange = (e) =>{
    this.setState({searchField: e.target.value});
  }

  componentDidMount(){
    //Fetch resource, returns promise
    //Here the then is the resolve from the promise, which returns a certain value
    //This value is then bound like this: resolved object => function operation
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){
      const {monsters, searchField} = this.state;
      const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
      return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <h2>Made by JC Software by little whore</h2>
          <SearchBox placeholder="Search Monsters..." onChange={this.handleChange} />
          <CardList monsters={filteredMonsters}></CardList>  
        </div>
      );
  }
}

export default App;
