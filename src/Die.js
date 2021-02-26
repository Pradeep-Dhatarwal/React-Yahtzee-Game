import React, { Component } from "react";
import "./Die.css";
class Die extends Component {
  static defaultProps = {
    numWord: ["one", "two", "three", "four", "five", "six"],
    val: 5
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    let { numWord, locked, val, disabled, rolling } = this.props;

    let classes = `Die fa-3x fas fa-dice-${numWord[val - 1]} ${
      locked ? "Die-locked" : ""
    } ${rolling ? "Die-rolling" : ""}`;
    return (
      <i
        className={classes}
        style={{ color: locked ? "grey" : "white" }}
        onClick={this.handleClick}
        disabled={disabled}
      ></i>
    );
  }
}

export default Die;
