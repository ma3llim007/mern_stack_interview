import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Input from "../Inputs";

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
    });

    it("should onChange event testing", () => {
        render(<Input />);
        const inputField = screen.getByRole("textbox");
        fireEvent.change(inputField, { target: { value: "ab" } });
        expect(inputField.value).toBe("ab")
    });
});
