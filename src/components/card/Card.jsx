import { Component } from "react";
import "./card.css";

export default class Card extends Component {
  constructor() {
    super();
  }

  render() {
    // console.log(this.props.monster);
    const { monster } = this.props;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${monster.id}?set=set2`}
          alt={monster.name}
          width={180}
        />
        <h3>{monster.name}</h3>
        <p>{monster.email}</p>
      </div>
    );
  }
}
