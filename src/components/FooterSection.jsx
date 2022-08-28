/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import { HeroButton } from '../styles';
import { abstracts } from '../styles/constatnts';

export default function FooterSection() {
  return (
    <FooterSectionContainter>
      <FooterSectionWrapper>
        <img src="/logo-light.svg" alt="logo" />
        <HeroButton>Get Started</HeroButton>
      </FooterSectionWrapper>
    </FooterSectionContainter>
  );
}

const FooterSectionContainter = styled.div`
  background-color: ${abstracts.colors.black};
  width: auto;
  height: auto;
`;

const FooterSectionWrapper = styled.div`
  padding: 2.25em 1em;
  display: flex;
  justify-content: space-between;
  background-color: ${abstracts.colors.black};
`;
