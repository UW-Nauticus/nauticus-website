/**
 =========================================================
 * Material Kit 2 React React - v2.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// @mui material components
import { createTheme } from '@mui/material/styles';

// Material Kit 2 React helper functions
import boxShadow from './functions/boxShadow';
import hexToRgb from './functions/hexToRgb';
import linearGradient from './functions/linearGradient';
import pxToRem from './functions/pxToRem';
import rgba from './functions/rgba';

// Material Kit 2 React components base styles for @mui material components
import card from './components/card';
import input from './components/form/input';
import inputLabel from './components/form/inputLabel';
import inputOutlined from './components/form/inputOutlined';
// Material Kit 2 React base styles
import boxShadows from './base/boxShadows';
import typography from './base/typography';
import breakpoints from './base/breakpoints';
import borders from './base/borders';
import colors from './base/colors';

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCard: { ...card },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
  },
});
