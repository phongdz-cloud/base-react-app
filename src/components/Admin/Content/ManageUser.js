import React, { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import {
  getAllUsers,
  getUserWithPaginate,
} from "../../../services/apiServices";
import "./ManageUser.scss";
import ModalCreateUser from "./ModalCreateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import TableUserPaginate from "./TableUserPaginate";
const ManageUser = (props) => {
  const LIMIT_USER = 5;

  const [pageCount, setPageCount] = useState(0);

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
    // fetchListUsers();
    fetchListUsersWithPaginate(1);
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();

    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const fetchListUsersWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, LIMIT_USER);
    if (res.EC === 0) {
      setListUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
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
          {/* <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
          /> */}
          <TableUserPaginate
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            pageCount={pageCount}
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
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;
