import React from "react";

class GitFollower extends React.Component {
  componentDidMount() {
    //console.log(`GitUser ${this.props.user.name}:  Mounts`);
    //console.log(this.props);
  }

  render() {
    const { gitUser } = this.props;
    //console.log(`GitUser ${this.props.name}: Renders`);
    console.log(gitUser);
    return (
      <div className="GitUser">
        <img src={gitUser.avatar_url} alt={gitUser.login} />
        <div>
          <h1>{gitUser.login}</h1>
          <div className="info">
            <a href={gitUser.html_url} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <br />
            <a href={gitUser.repos_url} target="_blank" rel="noreferrer">
              Repos:{" "}
            </a>
            <p style={{ display: "inline" }}>{gitUser.public_repos}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GitFollower;
