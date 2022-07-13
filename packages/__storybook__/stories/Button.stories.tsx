import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../src/components/index';

export default {
  title: 'Buttons/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Contained: ComponentStory<typeof Button> = () => (
  <Button variant="contained">Contained</Button>
);

export const Outlined: ComponentStory<typeof Button> = () => (
  <Button variant="outlined">Outlined</Button>
);

export const Text: ComponentStory<typeof Button> = () => (
  <Button variant="text">Text</Button>
);
