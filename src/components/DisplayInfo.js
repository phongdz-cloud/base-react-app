import React from "react";

class DisplayInfo extends React.Component {
  render() {
    // desctructuring array/object
    const { listUsers } = this.props;
    // props => viết tắt property
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name's {user.name} </div>
              <div>My age's {user.age} </div>
              <hr />
            </div>
          );
        })}
        {/* <div>My name's {age}</div>
        <div>My age's {name}</div>
        <hr />
        <div>My name's {age}</div>
        <div>My age's {name}</div>
        <hr />
        <div>My name's {age}</div>
        <div>My age's {name}</div> */}
      </div>
    );
  }
}

export default DisplayInfo;
