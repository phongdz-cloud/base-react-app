import React from "react";
import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
  return (
    <div className="manager-user-container">
      <div className="title">Manager User</div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          table users
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
