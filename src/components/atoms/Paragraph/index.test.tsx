import React from "react";
import { render } from "@testing-library/react-native";
import { ReactTestInstance } from "react-test-renderer";
import { Paragraph } from ".";

let field: ReactTestInstance;

describe("Test component Typograph", () => {
  beforeEach(() => {
    const { getByTestId } = render(
      <Paragraph
        fontFamily="Poppins_700Bold"
        size={20}
        color="#FFFF"
        testID="TextField"
      >
        Hello World
      </Paragraph>
    );
    field = getByTestId("TextField");
  });

  it("Should be show text Hello World", () => {
    expect(field.props.children).toBe("Hello World");
  });

  it("Should be show font of type Poppins_700Bold", () => {
    expect(field.props.fontFamily).toBe("Poppins_700Bold");
  });

  it("Should be show font of size 20", () => {
    expect(field.props.size).toBe(20);
  });

  it("should be show color #FFFF", () => {
    expect(field.props.color).toBe("#FFFF");
  });
});
