import React from 'react';
import styled from 'styled-components';
import { ButtonPrimary } from '../styles';
import { abstracts } from '../styles/constatnts';

export default function Navbar() {
  return (
    <NavHeader>
      <LogoElement src="/skilled.svg" alt="logo" />
      <ButtonPrimary>Get Started</ButtonPrimary>
    </NavHeader>
  );
}

const NavHeader = styled.header`
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  @media ${abstracts.devices.tablet} {
    margin: 1rem 2.4375rem;
  }
  @media ${abstracts.devices.laptop} {
    margin: 1rem 10.3125rem;
  }
`;

const LogoElement = styled.img`
  cursor: pointer;
  width: 5.56rem;
  height: 2.18rem;
`;
