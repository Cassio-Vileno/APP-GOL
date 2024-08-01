import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';
import ButtonOutline from './index';

let pressed = false;
let outline: ReactTestInstance;
const nameText = 'Confirmar';

describe('Test Component Button', () => {
  it('should show the button and the touch works correctly', () => {
    const { getByTestId, getByText } = render(
      <ButtonOutline
        testID="outline"
        onPress={() => {
          pressed = true;
        }}
      >
        {nameText}
      </ButtonOutline>,
    );

    outline = getByTestId('outline');

    expect(outline).toBeTruthy();

    fireEvent.press(outline);
    expect(pressed).toBe(true);

    expect(getByText(nameText)).toBeTruthy();
  });

  it('should be possible to enable loading to the button', () => {
    const { getByTestId } = render(
      <ButtonOutline
        testID="outline"
        onPress={() => {
          pressed = true;
        }}
        loading
      >
        {nameText}
      </ButtonOutline>,
    );

    outline = getByTestId('outline');
    expect(outline.props.children[0].type.displayName).toBe('ActivityIndicator');
  });

  it('should be possible to disable button', () => {
    const { getByTestId } = render(
      <ButtonOutline
        testID="outline"
        onPress={() => {
          pressed = true;
        }}
        disabled
      >
        {nameText}
      </ButtonOutline>,
    );

    expect(getByTestId('outline').props.style.opacity).toEqual(0.6);
  });
});
