import React from 'react';
import { TextField as TextFieldMUI } from '@mui/material';

import { TextInputProps } from '../../../types/interface';

export const TextInput: React.FC<TextInputProps> = (props) => <TextFieldMUI {...props} />;
