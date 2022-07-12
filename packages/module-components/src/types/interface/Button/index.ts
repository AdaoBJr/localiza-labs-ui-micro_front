import { SxProps, Theme } from '@mui/material';
import { ReactFC } from '../React';

export interface ButtonProps extends ReactFC {
  /**
   *Propriedades CSS do MUI.
   */
  sx?: SxProps<Theme>;
  /**
   * Tipos de variantes de botão.
   * @default contained
   */
  variant?: 'contained' | 'outlined' | 'text';
}
