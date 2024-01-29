import { Component } from "react";
import Card from "../card/Card";
import "./cardlist.css";

export default class Cardlist extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // console.log(this.props.monstersUsers);
    return (
      <div className="card-list">
        {this.props.monstersUsers.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}
