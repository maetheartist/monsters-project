import { Component } from "react";
import Cardlist from "./components/cardlist/Cardlist";
import Search from "./components/search/Search";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchQuery: " ",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        // console.log(data);
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  render() {
    // console.log(this.state.monsters);
    const { monsters } = this.state;
    //to get the user input
    const onSearchHandler = (event) => {
      const searchString = event.target.value;
      this.setState(() => {
        return { searchQuery: searchString };
      });
    };

    //to filter through the data
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchQuery);
    });

    return (
      <div>
        <Search
          onSearch={onSearchHandler}
          placeHolder="search monster"
          className="search-box"
        />
        <Cardlist monstersUsers={filteredMonsters} />
      </div>
    );
  }
}
