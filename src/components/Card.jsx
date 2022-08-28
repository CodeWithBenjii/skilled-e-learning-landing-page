/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { BodyMD, HeadingSM } from '../styles';
import { abstracts } from '../styles/constatnts';

export default function Card({ title, image, description }) {
  return (
    <CardElement className="card">
      <CardImage src={image} />
      <HeadingSM>{title}</HeadingSM>
      <BodyMD>{description}</BodyMD>
      <GetStarted href="#">Get Started</GetStarted>
    </CardElement>
  );
}

const CardElement = styled.div`
  background-color: #fff;
  position: relative;
  display: flex;
  gap: 1em;
  flex-direction: column;
  margin: 1rem;
  padding: 1.75rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  border-radius: 0.625rem;
  color: ${abstracts.colors.gray};
`;
const GetStarted = styled.a`
  margin-top: 0.5rem;
  text-decoration: none;
  color: ${abstracts.colors.hotPink};
  font-weight: bold;
`;
const CardImage = styled.img`
  position: absolute;
  top: -10%;
  left: 5%;
  width: 3.5em;
  height: 3.5em;
`;
