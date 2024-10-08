import React from "react";
import { Modal } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Paragraph } from "../../atoms/Paragraph";
import SearchBar from "../SearchBar";
import CityItem from "../CityItem";
import {
  ContainerModal,
  ContentModal,
  DownBar,
  DownBarContainer,
  LineSeparator,
  Overlay,
  SearchBarContainer,
} from "./styles";

import { LocaleType } from "../../../services/locale.service";

type ModalCitysProps = {
  isVisible: boolean;
  close: () => void;
  citys: LocaleType[];
  setLocation: (item: any) => void;
  value: string;
  onSearch: (value: string) => void;
};

export default function ModalCitys({
  isVisible,
  setLocation,
  onSearch,
  close,
  citys,
  value,
  ...rest
}: ModalCitysProps): JSX.Element {
  const handleLocation = ({ city, iata, state, id }: any) => {
    setLocation({ city, iata, state, id });
    close();
  };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      statusBarTranslucent
      {...rest}
    >
      <Overlay activeOpacity={1} onPress={() => close()}>
        <ContainerModal>
          <DownBarContainer>
            <DownBar />
          </DownBarContainer>
          <ContentModal>
            <Paragraph size={18}> Qual a sua cidade?</Paragraph>
            <SearchBarContainer>
              <SearchBar onChageText={onSearch} />
            </SearchBarContainer>
            <FlatList
              data={citys}
              style={{ margin: 8 }}
              ItemSeparatorComponent={LineSeparator}
              renderItem={({ item }) => {
                return (
                  <CityItem
                    key={item.id}
                    isSelected={value == item.city}
                    onPress={() =>
                      handleLocation({
                        city: item.city,
                        iata: item.iata,
                        state: item.state,
                        id: item.id,
                      })
                    }
                    imageUri={item.image_file}
                    name={item.city}
                    iata={item.iata}
                    state={item.state}
                  />
                );
              }}
            />
          </ContentModal>
        </ContainerModal>
      </Overlay>
    </Modal>
  );
}
