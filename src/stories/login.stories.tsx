import { ComponentMeta, ComponentStory } from '@storybook/react';
import Login, {LoginProps} from '../components/login-form/login';


// Define the component metadata
const meta: ComponentMeta<typeof Login> = {
    title: 'Login',
    component: Login,
    argTypes: {
      onSubmit: { action: 'submit' },
    },
  };
  
  // Define the component story
const Template: ComponentStory<typeof Login> = (args: LoginProps) => <Login {...args} />;

// Export the metadata and the story
export default meta;
export const Default = Template.bind({});
Default.args = {
    onSubmit: ({ username, password }) => alert(`${username}, ${password}`)
};