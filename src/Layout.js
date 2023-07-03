import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import Admin from "./components/Admin/Admin";
import DashBoard from "./components/Admin/Content/DashBoard";
import ManageUser from "./components/Admin/Content/ManageUser";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import HomePage from "./components/Home/HomePage";
import ListQuiz from "./components/User/ListQuiz";
import DetailQuiz from "./components/User/DetailQuiz";
import ManageQuiz from "./components/Admin/Content/Quiz/ManageQuiz";
import Questions from "./components/Admin/Content/Qusetion/Questions";
import Test1 from "./routes/Test1";
import PrivateRoute from "./routes/PrivateRoute";

export const NotFound = () => {
  return (
    <div className="container mt-3 alert alert-danger">
      404. Not found data with your current URL
    </div>
  );
};

const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route
            path="users"
            element={
              <PrivateRoute>
                <ListQuiz />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/quiz/:id" element={<DetailQuiz />} />
        <Route
          path="admins"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        >
          <Route index element={<DashBoard />} />
          <Route path="manager-users" element={<ManageUser />} />
          <Route path="manager-quizzes" element={<ManageQuiz />} />
          <Route path="manager-questions" element={<Questions />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/test" element={<PrivateRoute />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Layout;
