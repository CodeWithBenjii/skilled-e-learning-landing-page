/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { abstracts } from './constatnts';

export const HeadingXL = styled.h1`
  font-weight: ${abstracts.typeography.weight.extrabold};
  font-size: ${abstracts.typeography.size[900]};
  line-height: ${abstracts.typeography.lineHeight.XL};
  color: #13183f;
`;

export const HeadingLG = styled.h2`
  font-weight: ${abstracts.typeography.weight.extrabold};
  font-size: ${abstracts.typeography.size[900]};
  line-height: ${abstracts.typeography.lineHeight.LG};
`;
export const HeadingMD = styled.h3`
  font-weight: ${abstracts.typeography.weight.extrabold};
  font-size: ${abstracts.typeography.size[600]};
  line-height: ${abstracts.typeography.lineHeight.MD};
`;
export const HeadingSM = styled.h4`
  /* margin: 1em 0; */
  color: ${abstracts.colors.black};
  font-weight: ${abstracts.typeography.weight.extrabold};
  font-size: ${abstracts.typeography.size[700]};
  line-height: ${abstracts.typeography.lineHeight.SM};
`;
export const BodyMD = styled.p`
  font-weight: ${abstracts.typeography.weight[500]};
  line-height: ${abstracts.typeography.lineHeight.BASE};
`;
export const BodySM = styled.p`
  font-size: ${abstracts.typeography.size[500]};
  font-weight: ${abstracts.typeography.weight[700]};
  line-height: ${abstracts.typeography.lineHeight.BASE};
`;
