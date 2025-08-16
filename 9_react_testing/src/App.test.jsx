import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App Component Test Suite", () => {
    it("should render heading", () => {
        render(<App />);
        const heading = screen.getByText(/vite react/i);
        expect(heading).toBeInTheDocument();
    });
});
