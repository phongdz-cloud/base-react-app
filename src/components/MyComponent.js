// class component
// function component
import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       {
//         id: 1,
//         name: "Hoi Dan IT",
//         age: "16",
//       },
//       {
//         id: 2,
//         name: "Hoai Phong",
//         age: "24",
//       },
//       {
//         id: 3,
//         name: "Anh Nhi",
//         age: "69",
//       },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     // let listUsersClone = [...this.state.listUsers];

//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = [...this.state.listUsers];
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };

//   // JSX
//   // DRY: don't repeat youseft

//   render() {
//     return (
//       <>
//         <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//         <br /> <br />
//         <DisplayInfo
//           listUsers={this.state.listUsers}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </>
//     );
//   }
// }

const MyComponent = () => {
  const [listUsers, setListUsers] = useState([
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
  ]);

  const handleAddNewUser = (userObj) => {
    // let listUsersClone = [...this.state.listUsers];

    // this.setState({
    //   listUsers: [userObj, listUsers],
    // });

    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = [...listUsers];
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    // this.setState({
    //   listUsers: listUsersClone,
    // });
    setListUsers(listUsersClone);
  };
  return (
    <>
      <AddUserInfo handleAddNewUser={handleAddNewUser} />
      <br /> <br />
      <DisplayInfo listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </>
  );
};

export default MyComponent;
