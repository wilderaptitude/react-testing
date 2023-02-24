import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skills } from '../components/skills/skills';

export default {
  title: 'Skills',
  component: Skills,
} as ComponentMeta<typeof Skills>;

const Template: ComponentStory<typeof Skills> = (args) => <Skills {...args} />;

export const Default = Template.bind({});
Default.args = {
    skills: ["testing", "react", "components"]
};