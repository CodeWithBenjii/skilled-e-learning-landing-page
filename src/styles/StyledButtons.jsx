/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { abstracts } from './constatnts';

export const ButtonPrimary = styled.button`
  background-color: white;
  cursor: pointer;
  border-radius: 1.75rem;
  border: none;
  background-color: ${abstracts.colors.black};
  color: white;
  padding: 0.625rem 1.15rem;
  font-weight: bold;
  &:hover {
    background-color: ${abstracts.colors.gray};
  }
`;

export const HeroButton = styled.button`
  background-image: ${abstracts.gradients.gradient1};
  cursor: pointer;
  border-radius: 1.75rem;
  border: none;
  background-color: ${abstracts.colors.black};
  color: white;
  padding: 1rem 1.9375rem;
  font-weight: bold;
  &:hover {
    background-image: ${abstracts.gradients.gradient1hover};
  }
`;
