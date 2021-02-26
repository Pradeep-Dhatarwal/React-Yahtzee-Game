import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const { score, doScore, name, description } = this.props;
    let disabled = score === undefined ? "active" : "disabled";
    return (
      <tr
        className={`RuleRow RuleRow-${disabled}`}
        onClick={score === undefined ? doScore : null}
      >
        <td className="RuleRow-name">{name}</td>
        {score == undefined ? (
          <td className="RuleRow-score">{description}</td>
        ) : (
          <td className="RuleRow-score">{score}</td>
        )}
      </tr>
    );
  }
}

export default RuleRow;
