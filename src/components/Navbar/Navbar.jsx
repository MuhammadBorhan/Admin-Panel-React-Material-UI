import {
  ChatBubbleOutline,
  DarkModeOutlined,
  FullscreenExitOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationAddOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, Badge } from "@mui/material";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            {/* <NotificationAddOutlined className="icon" />
            <div className="counter">1</div> */}
            <Badge badgeContent={1} color="error">
              <NotificationAddOutlined color="action" />
            </Badge>
          </div>
          <div className="item">
            {/* <ChatBubbleOutline className="icon" />
            <div className="counter">2</div> */}
            <Badge badgeContent={2} color="error">
              <ChatBubbleOutline color="action" />
            </Badge>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item" style={{ cursor: "pointer" }}>
            <Avatar
              alt="Borhan"
              src="https://glowing-semifreddo-77c56f.netlify.app/static/media/borhan.d87b28879c1a50ffbd3f.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
