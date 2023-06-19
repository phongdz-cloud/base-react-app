import React, { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  return (
    <div className="manager-user-container">
      <div className="title">Manager User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus /> Add new users
          </button>
        </div>
        <div className="table-users-container">table users</div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
