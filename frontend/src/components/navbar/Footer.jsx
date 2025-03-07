import React from 'react';
import { FooterContainer, FooterText, FooterLink } from './Footer.styles';

function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>
        © {currentYear} MyWebsite. All rights reserved. |{' '}
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;