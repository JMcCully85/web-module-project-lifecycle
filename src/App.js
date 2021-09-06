import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import GitUser from "./GitUser";
import GitFollowers from "./GitFollowers";

class App extends React.Component {
  state = {
    gitUser: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/JMcCully85")
      .then((res) => {
        //console.log(res);
        this.setState({
          ...this.state,
          gitUser: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    //console.log("App: Renders Component");
    return (
      <div className="App">
        {this.state !== null ? (
          <GitUser gitUser={this.state.gitUser} />
        ) : (
          <div>Loading</div>
        )}

        {this.state.gitUser.followers ? (
          <div className="followers">
            {<GitFollowers gitFollowers={this.state.gitUser.followers_url} />}
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}

export default App;
//
