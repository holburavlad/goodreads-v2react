import React from 'react';
import AlertComponent from './alert'
import GlobalStyle from '../fonts/' 

export default {
  title: 'Alert',
  component: AlertComponent,
};

export const Alert = () => <div><GlobalStyle></GlobalStyle> <AlertComponent/></div>;

