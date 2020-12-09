import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  Copyright
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>🍕Denvato Pizza</SocialLogo>
            <Copyright to='/'>&copy;Sir_Dazzling@2020</Copyright>
            <SocialIcons>
            <SocialIconLink href='https://github.com/Sir-Dazzling' target='_blank' aria-label='Github'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href='https://web.facebook.com/profile.php?id=100010018380872' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/sir_dazzling/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://twitter.com/Sir_dazzling'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/otti-daniel-290965129/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;