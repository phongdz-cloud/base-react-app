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

  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default MyComponent;
