import React from "react";
import "./DisplayInfo.scss";
class DisplayInfo extends React.Component {
  constructor(props) {
    console.log(">>> call constructors: 1");
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log(">>> call me component did mount");
    setTimeout(() => {
      document.title = "Eric & Hoi Dan IT";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(">>> call me component did update", this.props, prevProps);
    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("You got 5 users");
      }
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    console.log(">>> call me render");
    // desctructuring array/object
    const { listUsers } = this.props;
    // props => viết tắt property

    return (
      <div className="display-infor-container">
        {/* <img src={logo} /> */}
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
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name's {user.name} </div>
                  <div>My age's {user.age} </div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
