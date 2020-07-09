import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box-component.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // Arrow function binds any ref to this inside to the state
  // variables without having to write a bind method in the constructor()
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    // destructuring allows us take properties from an object and store them here
    // this is copies of the state properties and wont change the original states
    const { monsters, searchField } = this.state;

    console.log("monsters: " + monsters);
    console.log("searchField : " + searchField);
    // filter() returns a new array
    // includes() checks if the string inside includes is in the monster name that is being passed in
    // we don't use this.monsters as we are using the local monsters
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        {/*  we pass in values (props) we need for 
        this search box we can pass in different 
        props on other search boxes eg we can search for movies here 
        and cast members in another search box */}
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        {/* pass filtered monsters (initially all monsters) list too the card-list.component as props*/}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
