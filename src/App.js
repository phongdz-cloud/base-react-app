import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import PerfectScrollbar from "react-perfect-scrollbar";
const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-c̉ontainer">
        <div className="sidenav-container"></div>
        <div className="app-content">
          <PerfectScrollbar>
            <Outlet />
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default App;
