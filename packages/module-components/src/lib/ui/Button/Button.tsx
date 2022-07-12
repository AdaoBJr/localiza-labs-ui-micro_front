import React from 'react';
import { Button as ButtonMUI } from '@mui/material';

import { ButtonProps } from '../../../types/interface';

export const Button: React.FC<ButtonProps> = (props) => (
  <ButtonMUI {...props} variant={props.variant || 'contained'}>
    {props.children}
  </ButtonMUI>
);
