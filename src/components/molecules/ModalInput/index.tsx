import React, { ReactNode } from "react";
import { Modal } from "react-native";
import {
  ContainerModal,
  ContentModal,
  DownBar,
  DownBarContainer,
  Overlay,
} from "./styles";

type ModalInputProps = {
  children: ReactNode;
  isVisible: boolean;
  close: () => void;
};

export default function ModalInput({
  close,
  isVisible,
  children,
}: ModalInputProps): JSX.Element {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      statusBarTranslucent
    >
      <Overlay activeOpacity={1}>
        <ContainerModal>
          <DownBarContainer>
            <DownBar />
          </DownBarContainer>
          <ContentModal>{children}</ContentModal>
        </ContainerModal>
      </Overlay>
    </Modal>
  );
}
