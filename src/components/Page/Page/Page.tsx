import { Outlet } from "react-router-dom";
import { Wrapper } from "./Page.styled";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { FooterMediaLinks } from "../../../constants/footerLinks";

const Page = () => {
  return (
    <Wrapper>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer links={FooterMediaLinks} />
    </Wrapper>
  );
};

export default Page;
