import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, loction } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-class">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click Increase
        </button>

        <h2>Name:{name}</h2>
        <h3>Loction:{loction}</h3>
        <h3>contact</h3>
      </div>
    );
  }
}

export default UserClass;
