// class component
// function component
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "HaryPhamDev",
    address: "Hoi Dan IT",
    age: 26,
  };

  handleClick = (event) => {
    console.log(">> Click me my button");
    console.log(" Random ", Math.floor(Math.random() * 100 + 1));

    // merge State => react class
    this.setState({
      name: "Phong",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleOnMoverOver(event) {
    // console.log(event);
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(e) => this.handleOnChangeInput(e)} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
