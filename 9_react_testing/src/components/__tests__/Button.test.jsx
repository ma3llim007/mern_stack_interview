import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "../Button";

describe("Button Component Test Suite", () => {
    it("should click evnet target", () => {
        render(<Button />);
        const btn = screen.getByRole("button");
        fireEvent.click(btn);
        expect(screen.getByText("New Heading Append")).toBeInTheDocument();
    });
});
