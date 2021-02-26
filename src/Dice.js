import React, { Component } from "react";
import Die from "./Die";
import "./Dice.css";

class Dice extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {}
  render() {
    let { dice, locked, handleClick, disabled, rolling } = this.props;
    return (
      <div className="Dice">
        {dice.map((d, idx) => (
          <Die
            handleClick={() => handleClick(idx)}
            val={d}
            locked={locked[idx]}
            idx={idx}
            key={idx}
            disabled={disabled}
            rolling={rolling && !locked[idx]}
          />
        ))}
      </div>
    );
  }
}

export default Dice;
