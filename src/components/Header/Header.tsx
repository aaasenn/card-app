import { motion } from "framer-motion";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Wrapper } from "./Header.styled";
import StyledLink from "../reusable/Link.styled";
import { menuLinks } from "../../constants/headerLinks";

const avatarSize = {
  width: "24px",
  height: "24px",
};

const handleLogOutClick = () => {
  const authToken = localStorage.getItem("authToken");

  if (authToken) {
    localStorage.removeItem("authToken");
  }
};

const Header = () => {
  return (
    <Wrapper>
      <div className="header-navigation">
        {menuLinks.map((item) => (
          <motion.div key={item.id} whileHover={{ opacity: 0.7 }}>
            <StyledLink to={item.link}>{item.name}</StyledLink>
          </motion.div>
        ))}
      </div>
      <div className="header-profile">
        <Avatar sx={avatarSize}>
          <StyledLink to={"profile"}>A</StyledLink>
        </Avatar>
        <div className="header_profile-name">
          <StyledLink to={"profile"}>Admin</StyledLink>
          <StyledLink to={"/login"} onClick={handleLogOutClick}>
            <LogoutIcon />
          </StyledLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
