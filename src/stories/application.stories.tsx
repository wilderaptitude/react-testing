import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Application } from '../components/application/application';

export default {
  title: 'Application',
  component: Application,
} as ComponentMeta<typeof Application>;

export const Default = () => <Application />