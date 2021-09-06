import React from "react";
import axios from "axios";
import GitFollower from "./GitFollower";

class GitFollowers extends React.Component {
  state = {
    gitUsers: [],
  };

  componentDidMount() {
    //console.log("Pokemon: App Mounts");
    //console.log(this.props.gitFollowers);
    axios
      .get(this.props.gitFollowers)
      .then((res) => {
        //console.log(res.data);
        this.setState({
          ...this.state,
          gitUsers: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    //console.log("Pokemon: App renders");

    return (
      <div>
        {this.state.gitUsers ? (
          this.state.gitUsers.map((gitFollower) => (
            <GitFollower key={gitFollower.id} gitUser={gitFollower} />
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}

export default GitFollowers;
