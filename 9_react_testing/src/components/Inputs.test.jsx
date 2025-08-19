import { render, screen } from "@testing-library/react";
import Input from "./Inputs";
import { describe, expect, it } from "vitest";

describe("Input Component Test Suite", () => {
    it("should have input box", () => {
        render(<Input />);
        const inputBox = screen.getByRole("textbox");
        expect(inputBox).toBeInTheDocument();
    });
    it("should input validation", () => {
        render(<Input />);
        const inputPlaceHolder = screen.getByPlaceholderText(/Enter Your Email/);
        expect(inputPlaceHolder).toBeInTheDocument();
        expect(inputPlaceHolder).toHaveAttribute("name", "email");
        expect(inputPlaceHolder).toHaveAttribute("id", "email");
        expect(inputPlaceHolder).toHaveAttribute("type", "email");
        expect(inputPlaceHolder).toHaveAttribute("value", "sameer.d3v@gmail.com");
    });
});
