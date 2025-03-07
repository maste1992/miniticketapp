import React, { useState } from 'react';
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLinkItem,
  NavLink,
  MobileMenuButton,
} from './ Navbar.styles';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo>MyLogo</Logo>
      <MobileMenuButton onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </MobileMenuButton>
      <NavLinks isOpen={isOpen}>
        <NavLinkItem>
          <NavLink href="/">Home</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink href="/about">About</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink href="/services">Services</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink href="/signup">Get started</NavLink>
        </NavLinkItem>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;