import React, { useState, useEffect } from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { getAllUsers } from "../../../services/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);

  const [showModalViewUser, setShowModalViewUser] = useState(false);

  const [listUsers, setListUsers] = useState([]);

  const [dataUpdate, setDataUpdate] = useState({});

  const [dataView, setDataView] = useState({});

  const [dataDelete, setDataDelete] = useState({});

  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

  //componentDidMount
  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();

    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setDataUpdate(user);
    setShowModalUpdateUser(true);
  };

  const handleClickBtnView = (user) => {
    setDataView(user);
    setDataDelete(user);
  };

  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
  };

  const resetUpdateData = () => {
    setDataView({});
  };

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
        <div className="table-users-container">
          <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
        />

        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          dataView={dataView}
          resetUpdateData={resetUpdateData}
        />

        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          dataDelete={dataDelete}
        />
      </div>
    </div>
  );
};

export default ManageUser;
