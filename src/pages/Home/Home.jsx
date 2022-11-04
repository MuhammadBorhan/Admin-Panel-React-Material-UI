import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Home.scss";
import { Widget } from "../../components/Widget/Widget";

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
  );
};
