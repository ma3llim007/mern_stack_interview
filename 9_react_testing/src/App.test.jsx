import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App Component Test Suite", () => {
    it("should Have Heading", () => {
        render(<App />);
        const text = screen.getByText(/first react test case/i);
        expect(text).toBeInTheDocument();
    });
});
