/* eslint-disable import/prefer-default-export */

const size = {
  mobile: '26.56em',
  tablet: '48em',
  laptop: '64em',
  desktop: '90em',
};

export const abstracts = {
  colors: {
    gray: ' #666ca3; ',
    black: ' #13183f; ',
    grayOne: ' #83869a; ',
    hotPink: ' #f74780; ',
    lightPing: ' #ffa7c3; ',
    white: ' #ffffff; ',
  },
  gradients: {
    gradient1: ' linear-gradient(90deg, #ff6f48 0%, #f02aa6 100%); ',
    gradient1hover: ' linear-gradient(90deg, #ff6f48 0%, #f02aa6 100%); ',
    gradient2: ' linear-gradient(90deg, #4851ff 0%, #f02aa6 100%); ',
    gradient2hover: ' linear-gradient(90deg, #4851ff 0%, #f02aa6 100%); ',
  },
  typeography: {
    weight: {
      extrabold: 'extrabold',
      500: 500,
      700: 700,
    },
    size: {
      900: '3.5rem',
      800: '2.5rem',
      700: '2rem',
      600: '1.5rem',
      500: '1.125rem',
    },
    lineHeight: {
      XL: '4.41rem',
      LG: '3.15rem',
      MD: ' 2.5rem',
      SM: '1.89rem',
      BASE: '1.75rem',
    },
  },
  devices: {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
  },
};
