import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        home container
      </div>
    </div>
  );
};
