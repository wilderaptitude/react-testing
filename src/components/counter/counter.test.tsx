import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"
import { Counter } from "./counter";


describe('Counter', () => {
    test('increments on click',  async () =>{
        user.setup()
        render(<Counter />);
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });

        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    })

    test('count of 10 after clicking set button',  async () =>{
        user.setup()
        render(<Counter />);
        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, '10')
        expect(amountInput).toHaveValue(10)
        const setButton = screen.getByRole('button', {
            name: 'Set'
        })

        await user.click(setButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('10')
    })

})