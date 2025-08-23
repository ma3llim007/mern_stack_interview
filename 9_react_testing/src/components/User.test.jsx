import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import User from "./User";
import userEvent from "@testing-library/user-event";

describe.only("User Component Test Suite", () => {
    it("should props testing", () => {
        const name = "Mohd Sameer";
        render(<User username={name} />);
        const user = screen.getByText(name);
        expect(user).toBeInTheDocument();
    });

    it("should function props testing", async () => {
        const name = "Mohd Sameer";
        const changeUsername = vi.fn();
        userEvent.setup();
        render(<User username={name} changeUsername={changeUsername} />);
        const btn = screen.getByRole("button");
        await userEvent.click(btn);
        expect(changeUsername).toBeCalled();
    });
});
