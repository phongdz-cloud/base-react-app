// class component
// function component
import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      {
        id: 1,
        name: "Hoi Dan IT",
        age: "16",
      },
      {
        id: 2,
        name: "Hoai Phong",
        age: "24",
      },
      {
        id: 3,
        name: "Anh Nhi",
        age: "69",
      },
    ],
  };

  handleAddNewUser = (userObj) => {
    // let listUsersClone = [...this.state.listUsers];

    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  // JSX
  // DRY: don't repeat youseft
  render() {
    return (
      <>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br /> <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </>
    );
  }
}

export default MyComponent;
