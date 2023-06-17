import React from "react";

class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    // desctructuring array/object
    const { listUsers } = this.props;
    // props => viết tắt property

    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser ? "Hide list users" : "Show list users"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user) => {
              console.log(">>> check map user", user);
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name's {user.name} </div>
                  <div>My age's {user.age} </div>
                  <hr />
                </div>
              );

              //   if (+user.age > 18) {
              //     return (
              //       <div key={user.id} className="green">
              //         <div>My name's {user.name} </div>
              //         <div>My age's {user.age} </div>
              //         <hr />
              //       </div>
              //     );
              //   } else {
              //     return (
              //       <div key={user.id} className="red">
              //         <div>My name's {user.name} </div>
              //         <div>My age's {user.age} </div>
              //         <hr />
              //       </div>
              //     );
              //   }
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
        )}
      </div>
    );
  }
}

export default DisplayInfo;
