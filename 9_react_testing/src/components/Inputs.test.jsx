import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Input from "./Inputs";

describe("Input Test Component Suite", () => {
    it("should onChange event testing", async () => {
        userEvent.setup();
        render(<Input />);
        const input = screen.getByRole("textbox");
        await userEvent.type(input, "sameer");
        expect(screen.getByText("sameer")).toBeInTheDocument();
    });
});
