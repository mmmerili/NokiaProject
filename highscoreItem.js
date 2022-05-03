import React, { Component } from "react";

export default class highscoreItem extends Component {
  render() {
    const {
      player: { name, score },
    } = this.props;

    return (
      <tr className={player ? "table-success" : ""}>

        <td>{player ? name + " (You)" : name}</td>
        <td>{score}</td>
      </tr>
    );
  }
}