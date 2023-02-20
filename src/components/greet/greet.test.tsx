import React from 'react'
import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

describe('Greet', () => {
    test('Greet renders correctly',  () =>{
        render(<Greet />)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument()
    })

    test('Ggreet renders with a name', () => {
        render(<Greet name='wilder'/>)
        const textElement = screen.getByText('hello wilder')
        expect(textElement).toBeInTheDocument()
    })
})
