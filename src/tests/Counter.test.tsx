import { render, fireEvent, screen } from "@testing-library/react";
import { Counter } from "../Counter";

import "@testing-library/jest-dom";

describe("Counter", () => {
  it("render", () => {
    // Render the Counter component
    render(<Counter />);

    // Find the "Increment" button and click it
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);

    // Check if the count has been updated
    const countText = screen.getByText("Count: 1");
    expect(countText).toBeInTheDocument();
  });
});
