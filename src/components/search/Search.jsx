import { Component } from "react";
import "./search.css";

export default class Search extends Component {
  constructor() {
    super();
  }
  render() {
    const { onSearch } = this.props;
    return (
      <input
        type="search"
        placeholder={this.props.placeHolder}
        className={`search-input ${this.props.className}`}
        onChange={onSearch}
      />
    );
  }
}
