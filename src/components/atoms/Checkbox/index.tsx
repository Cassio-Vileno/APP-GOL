import React, { useState } from "react";
import { theme } from "../../../theme/default.theme";
import { Paragraph } from "../Paragraph";
import { CheckboxContainer, CheckboxInner, Container } from "./styles";

export type CheckboxProps = {
  onChange: (value: boolean) => void;
  placeholder: string;
};

export default function Checkbox({ placeholder, onChange }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  return (
    <Container
      onPress={() => {
        setChecked(!checked);
        onChange(!checked);
      }}
    >
      <CheckboxContainer>
        <CheckboxInner checked={checked} />
      </CheckboxContainer>
      <Paragraph
        color={theme.color.NeutralGra}
        fontFamily="Poppins_600SemiBold"
        size={12}
      >
        {placeholder}
      </Paragraph>
    </Container>
  );
}
