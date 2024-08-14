import React from "react";

import { fireEvent, render } from "@testing-library/react-native";
import { ReactTestInstance } from "react-test-renderer";
import { ButtonGhost } from ".";

let pressed = false;
let ghost: ReactTestInstance;
const nameText = "Confirmar";

describe("Test Component Button", () => {
  it("should show the button and the touch works correctly", () => {
    const { getByTestId, getByText } = render(
      <ButtonGhost
        testID="ghost"
        onPress={() => {
          pressed = true;
        }}
      >
        {nameText}
      </ButtonGhost>
    );

    ghost = getByTestId("ghost");

    expect(ghost).toBeTruthy();

    fireEvent.press(ghost);
    expect(pressed).toBe(true);

    expect(getByText(nameText)).toBeTruthy();
  });

  it("should be possible to disable button", () => {
    const { getByTestId } = render(
      <ButtonGhost
        testID="ghost"
        onPress={() => {
          pressed = true;
        }}
        disabled
      >
        {nameText}
      </ButtonGhost>
    );

    expect(getByTestId("ghost").props.style.opacity).toEqual(0.6);
  });

  it("should be possible to disable button", () => {
    const { getByTestId } = render(
      <ButtonGhost
        testID="ghost"
        onPress={() => {
          pressed = true;
        }}
        disabled
      >
        {nameText}
      </ButtonGhost>
    );

    expect(getByTestId("ghost").props.style.opacity).toEqual(0.6);
  });
});
