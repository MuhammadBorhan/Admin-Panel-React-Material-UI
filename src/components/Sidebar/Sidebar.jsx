import {
  AccountBox,
  Dashboard,
  DeliveryDining,
  HealthAndSafety,
  InsertChart,
  Inventory,
  Logout,
  NotificationAdd,
  Person2Outlined,
  PsychologyAlt,
  Settings,
  Store,
} from "@mui/icons-material";
import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Borhan</span>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li>
            <Person2Outlined className="icon" />
            <span>Users</span>
          </li>
          <li>
            <Store className="icon" />
            <span>Products</span>
          </li>
          <li>
            <Inventory className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDining className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Useful</p>
          <li>
            <InsertChart className="icon" />
            <span>Statistics</span>
          </li>
          <li>
            <NotificationAdd className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">Service</p>
          <li>
            <HealthAndSafety className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyAlt className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Setting</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountBox className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};
