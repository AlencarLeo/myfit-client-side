import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#f1f1f1',
    
    blackDark: '#090909',
    black: '#191919',
    blackLight: '#373737',

    cian: '#16CAC7',
    cianDark: '##1FFFD6'


  },
  fonts: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
  fontSizes: {
    small: '.75rem',
    normal: '1rem',
    title: '1.5rem',
    subtitle: '1.125rem',
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