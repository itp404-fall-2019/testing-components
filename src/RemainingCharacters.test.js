import React from "react";
import RemainingCharacters from "./RemainingCharacters";
import { render } from "@testing-library/react";

// AAA - Arrange, Act, Assert

it("renders the remaining number of characters", () => {
  // Arrange / Act
  const { container } = render(<RemainingCharacters max={10} text={"USC"} />);

  // Assert
  expect(container.textContent).toBe("7 characters left");
});

it("renders the children prop", () => {
  const { container } = render(
    <RemainingCharacters max={10} text={"USC"}>
      {remainingCharacters => {
        return <p>{remainingCharacters}</p>;
      }}
    </RemainingCharacters>
  );

  expect(container.textContent).toBe("7");
});
