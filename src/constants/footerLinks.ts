import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

type MaterialIconType = typeof SvgIcon;

export enum FooterLinks {
  Twitter = 'https://twitter.com/?lang=ru',
  Instagram = 'https://www.instagram.com/',
  Facebook = 'https://ru-ru.facebook.com/',
}

export interface IFooterMediaLinks {
  icon: MaterialIconType,
  link: FooterLinks,
} 



export const FooterMediaLinks: IFooterMediaLinks[] = [
  {
    icon: InstagramIcon,
    link: FooterLinks.Instagram
  },
  {
    icon: TwitterIcon,
    link: FooterLinks.Twitter
  },
  {
    icon: FacebookIcon,
    link: FooterLinks.Facebook
  }
]