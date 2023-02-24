import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Greet } from '../components/greet/greet';

export default {
  title: 'Greet',
  component: Greet,
} as ComponentMeta<typeof Greet>;

export const Default = () => <Greet />