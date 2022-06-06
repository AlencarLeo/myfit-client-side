import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#D7D7D7',
    whiteDark: '#F9F9F9',
    
    blackDark: '#090909',
    black: '#191919',
    blackLight: '#292929',

    cianLight: '#C2FFFF',
    cian: '#33FFFF',
    cianDark: '##00D7D7'


  },
  fonts: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
  fontSizes: {
    xsmall: '.625rem',
    small: '.75rem',
    subtitle: '.875rem',
    normal: '1rem',
    title: '1.5rem',
    emphasis: '4rem'
  },
  breakpoints: {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;