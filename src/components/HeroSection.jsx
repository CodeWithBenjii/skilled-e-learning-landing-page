/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BodyMD, HeadingXL, HeroButton } from '../styles';
import { abstracts } from '../styles/constatnts';

export default function HeroSection() {
  const [windowWidth, setwindowWidth] = useState(0);
  const handleWindowResize = useCallback((event) => {
    setwindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <HeroContainer>
      <HeroLeft>
        <HeadingXL>Maximize skill, minimize budget</HeadingXL>
        <BodyMD>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </BodyMD>
        <div>
          <HeroButton>Get Started</HeroButton>
        </div>
      </HeroLeft>
      <HeroRight>
        <HeroImage
          src={
            windowWidth < 768
              ? '/image-hero-mobile@2x.webp'
              : '/image-hero-desktop.webp'
          }
          alt="Lady Drinking Coffee"
        />
      </HeroRight>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  display: grid;
  position: relative;
  @media ${abstracts.devices.tablet} {
    grid-template-columns: 2.4375rem 1fr 1fr;
  }
  @media ${abstracts.devices.laptop} {
    grid-template-columns: 10.3125rem 1fr 1.5fr;
  }
`;

const HeroLeft = styled.div`
  color: ${abstracts.colors.gray};
  display: flex;
  margin: 0 1em;
  flex-direction: column;
  gap: 2rem;
  @media ${abstracts.devices.tablet} {
    margin-top: 6.1875rem;
    margin: 0;
    gap: 1em;
    margin-top: 2.5625rem;
    grid-column-start: 2;
  }
  @media ${abstracts.devices.laptop} {
    margin-top: 11.125rem;
  }
`;
const HeroRight = styled.div`
  overflow: hidden;
  width: 100%;

  @media ${abstracts.devices.tablet} {
    margin-top: 2rem;
    width: 40rem;
    margin-right: -15rem;
    margin-top: -10rem;
    height: auto;
    grid-column-start: 3;
    grid-template-columns: 2.4375rem 1fr 1.5fr;
  }
  @media ${abstracts.devices.laptop} {
    margin-top: 2rem;
    width: 160%;
    margin-right: -6rem;
    margin-top: -22rem;
    grid-column-start: 3;
    grid-template-columns: 10.3125rem 1fr 1.5fr;
  }
`;
const HeroImage = styled.img`
  width: auto;
  height: auto;
  @media ${abstracts.devices.tablet} {
    height: 100%;
    width: 100%;
  }
`;
