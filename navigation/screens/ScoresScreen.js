import React, { Component } from "react";
import firebase from "../config/firebase";
import highscoreItem from "./highscoreItem";

export default class ScoresScreen extends Component {
  state = {
    leaderboard: [],
    error: null
  };

  componentDidMount() {
    const ref = firebase.database().ref("scores");
    ref
      .orderByChild("score")
      .limitToLast(10)
      .on(
        "value",
        snap => {
          const leaderboard = [];
          snap.forEach(player => {
            leaderboard.unshift({ ...player.val(), key: player.key });
          });
          this.setState({ leaderboard });
        },
        error => {
          this.setState({
            error: error.toString()
          });
        }
      );
  }

  render() {
    if (this.state.error) {
      return (
        <div className="text-danger">
          We were unable to fetch the scoreboard. {this.state.error}
        </div>
      );
    }
    return (
      <div>
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Highscore</th>
            </tr>
          </thead>
          <tbody>
            {this.state.leaderboard.map((player, index) => {
              return (
                <highscoreItem
                  player={player}
                  rank={index + 1}
                  isLoggedInUser={
                    this.props.user && this.props.user.uid === player.key
                  }
                  key={player.name + index + player.score}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FFFFFF"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    backgroundColor: "#FFFFFF",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
  },
  score: {
    marginTop: 16,
    paddingVertical: 8,
    backgroundColor: "#FFFFFF",
    color: "#20232a",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold'
  },
  user: {
    marginTop: 16,
    paddingVertical: 8,
    backgroundColor: "#FFFFFF",
    color: "#20232a",
    textAlign: "center",
    fontSize: 18,
  }
  });

export default Scores;