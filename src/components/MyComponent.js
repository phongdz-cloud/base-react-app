// class component
// function component
import React from "react";
import UserInfo from "./UserInput";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  // JSX
  render() {
    const myInfo = ["ab", "c", "c"];

    return (
      <div>
        <UserInfo />
        <br /> <br />
        <DisplayInfo name="Hoi Dan IT" age="30" />
        <hr />
        <DisplayInfo name="Phong" age={26} myInfo={myInfo} />
      </div>
    );
  }
}

export default MyComponent;
