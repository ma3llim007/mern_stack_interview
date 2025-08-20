import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Function from "../Function";

describe("Function Testing Component Suite", () => {
    it("should target button", () => {
        render(<Function />);
        const button = screen.getByTestId("btn1");
        fireEvent.click(button);
        expect(screen.getByText(/hello/i)).toBeInTheDocument();
    });
});
