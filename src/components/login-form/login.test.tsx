import { render, fireEvent, waitFor } from "@testing-library/react"
import Login from "./login"


describe('Login', () => {
    test('renders', async () =>{
        const handleSubmit = jest.fn();
        const { getByLabelText, getByRole } = render(<Login onSubmit={handleSubmit} />);
        const usernameInput = getByLabelText('Username:');
        const passwordInput = getByLabelText('Password:');
        const submitButton = getByRole('button', { name: 'Submit' });

        fireEvent.change(usernameInput, { target: { value: 'john.doe' } });
        fireEvent.change(passwordInput, { target: { value: 'secret' } });
        fireEvent.click(submitButton);

        await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalledWith({ username: 'john.doe', password: 'secret' });
        });
    })
})