// class component
// function component
import React from "react";
import UserInfo from "./UserInput";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      {
        id: 1,
        name: "Hoi Dan IT",
        age: "26",
      },
      {
        id: 2,
        name: "Hoai Phong",
        age: "24",
      },
      {
        id: 3,
        name: "Anh Nhi",
        age: "23",
      },
    ],
  };

  // JSX
  // DRY: don't repeat youseft
  render() {
    return (
      <div>
        <UserInfo />
        <br /> <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
