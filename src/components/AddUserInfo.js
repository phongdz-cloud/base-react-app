import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   state = {
//     name: "Eric",
//     address: "Hoi Dan IT",
//     age: 26,
//   };
//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();

//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100) + 1 + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I'm {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name:</label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(e) => this.handleOnChangeInput(e)}
//           />
//           <button>Submit</button>

//           <label>Age:</label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(e) => this.handleOnChangeAge(e)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfo = (props) => {
  const [userInfo, setUserInfo] = useState({
    name: "Eric",
    address: "Hoi Dan IT",
    age: 26,
  });
  const handleOnChangeInput = (event) => {
    // this.setState({
    //   name: event.target.value,
    // });
    setUserInfo({ ...userInfo, name: event.target.value });
  };

  const handleOnChangeAge = (event) => {
    // this.setState({
    //   age: event.target.value,
    // });
    setUserInfo({ ...userInfo, age: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100) + 1 + "-random",
      name: userInfo.name,
      age: userInfo.age,
    });
  };
  return (
    <div>
      My name is {userInfo.name} and I'm {userInfo.age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name:</label>
        <input
          value={userInfo.name}
          type="text"
          onChange={(e) => handleOnChangeInput(e)}
        />
        <button>Submit</button>

        <label>Age:</label>
        <input
          value={userInfo.age}
          type="text"
          onChange={(e) => handleOnChangeAge(e)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfo;
