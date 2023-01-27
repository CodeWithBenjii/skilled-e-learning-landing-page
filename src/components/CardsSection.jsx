import React from 'react';
import styled from 'styled-components';
import { BodyMD, HeadingMD, HeadingSM } from '../styles';
import { abstracts } from '../styles/constatnts';
import Card from './Card';
import CardCTA from './CardCTA';

export default function CardsSection() {
  return (
    <CardContainer>
      <CardCTA
        title="Check out our most popular courses!
"
      />
      <Card
        title="Animation"
        image="/icon-animation.svg"
        description="Learn the latest animation techniques to create stunning motion design
        and captivate your audience."
      />
      <Card
        title="Design"
        image="/icon-design.svg"
        description="Create beautiful, usable interfaces to help shape the future of how
        the web looks."
      />
      <Card
        title="Photography"
        image="/icon-photography.svg"
        description="Explore critical fundamentals like lighting, composition, and focus to
        capture exceptional photos."
      />
      <Card
        title="Crypto"
        image="/icon-crypto.svg"
        description="All you need to know to get started investing in crypto. Go from
        beginner to advanced with this 54 hour course."
      />
      <Card
        title="Business"
        image="/icon-business.svg"
        description="A step-by-step playbook to help you start, scale, and sustain your
        business without outside investment."
      />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  padding: 5.8125rem 0rem;
  display: grid;
  background: linear-gradient(180deg, #ffffff 0%, #f0f1ff 100%);

  @media ${abstracts.devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 2.4375rem;
    gap: 2em;
  }
  @media ${abstracts.devices.desktop} {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 10.3125rem;
    gap: 2em;
  }
`;
