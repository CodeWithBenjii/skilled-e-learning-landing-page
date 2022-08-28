import React from 'react';
import styled from 'styled-components';
import { BodyMD, HeadingMD, HeadingSM } from '../styles';
import { abstracts } from '../styles/constatnts';

export default function CardCTA({ title }) {
  return (
    <CardElement>
      <HeadingMD>{title}</HeadingMD>
    </CardElement>
  );
}

const CardElement = styled.div`
  margin: 1rem;
  padding: 1.75rem;
  background-image: ${abstracts.gradients.gradient1};
  color: white;
  border-radius: 0.625rem;
`;
