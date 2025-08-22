import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AsyncElement from "./AsyncElement";

describe("AsyncElement Component Test Suite", () => {
    it("should async element with find by", async () => {
        render(<AsyncElement />);
        const element = await screen.findByText(/Data Found/i);
        expect(element).toBeInTheDocument();
    });
});
