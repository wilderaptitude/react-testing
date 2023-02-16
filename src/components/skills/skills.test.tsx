import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
    const skills = ["html", "css", "js"]

    test("render conrrectly", () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })

    test("render list of skills", () => {
        render(<Skills skills={skills}/>)
        const listItemElements = screen.getAllByRole("listitem")
        expect(listItemElements).toHaveLength(skills.length)
    })

    test("renders Login button", () => {
        render(<Skills skills={skills}/>)
        const loginButton = screen.getByRole("button", {
            name: "Login"
        })
        expect(loginButton).toBeInTheDocument()

    })
    test("start learning button not rendered", () => {
        render(<Skills skills={skills}/>)
        const startLearningButton = screen.queryByRole("button", {
            name: "Start Learning"
        })
        expect(startLearningButton).not.toBeInTheDocument()

    })
})