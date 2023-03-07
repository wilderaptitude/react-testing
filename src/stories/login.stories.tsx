import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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

export const FilledForm = Template.bind({});
FilledForm.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  // Simulate interactions with the component
  await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');

  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

  await userEvent.click(canvas.getByRole('button'));

  // Assert event call
  await expect(args.onSubmit).toHaveBeenCalled();
};