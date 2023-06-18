import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";

const DisplayInfo = (props) => {
  const { listUsers } = props; // objects

  const [isShowHideListUser, setShowHideListUser] = useState(true);
  // Desctructuring assignment

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("You deleted all the user");
    }
    console.log(">>> call me useEffect");
  }, [listUsers]);

  console.log(">>> call me render");

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name's {user.name} </div>
                <div>My age's {user.age} </div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
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
};

export default DisplayInfo;
