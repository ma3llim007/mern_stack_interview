import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component Test Suite", () => {
    it("should event with user event library", async() => {
        userEvent.setup();
        render(<Button />);
        const btn = screen.getByText("Add Heading");
        await userEvent.click(btn);
        expect(screen.getByText("New Heading Append")).toBeInTheDocument();
    });
});
