import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test('Greet renders correctly',  () =>{
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})

test('should render greet with a name', () => { 
    render(<Greet name='wilder'/>)
    const textElement = screen.getByText('hello wilder')
    expect(textElement).toBeInTheDocument()
})