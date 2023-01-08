import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Wrapper } from "./Footer.styled";
import { IFooterMediaLinks } from "../../constants/footerLinks";

interface IFooter {
  links: IFooterMediaLinks[];
}

const Footer = ({ links }: IFooter) => {
  return (
    <footer>
      <Wrapper>
        <div className="footer_medias">
          <div className="footer_media-title">Follow us</div>
          <div className="footer_medias-icons">
            <ul>
              {links.map((resource) => (
                <li key={resource.link}>
                  <Link href={resource.link} color={grey[50]}>
                    <resource.icon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer_privacy">
          <Typography paragraph>©All rights reserved</Typography>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
