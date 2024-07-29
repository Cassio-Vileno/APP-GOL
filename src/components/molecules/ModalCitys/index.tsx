import React, { useEffect, useState } from "react";
import {
  Container,
  Overlay,
  ContainerModal,
  ContentModal,
  SearchBarContainer,
  DownBar,
  DownBarContainer,
  LineSeparator,
} from "./styles";
import { Paragraph } from "../../atoms/Paragraph";
import { FlatList } from "react-native-gesture-handler";
import { Modal } from "react-native";
import SearchBar from "../../atoms/SearchBar";
import CityItem from "../CityItem";

import { LocaleService, LocaleType } from "../../../services/locale.service";

type ModalCitysProps = {
  isVisible: boolean;
  close: () => void;
  setLocation: (item: any) => void;
  value: string;
};

export default function ModalCitys({
  isVisible,
  setLocation,
  close,
  value,
  ...rest
}: ModalCitysProps): JSX.Element {
  const [locale, setLocale] = useState<LocaleType[]>([]);

  const onGetLocale = async () => {
    try {
      const res = await LocaleService.findAll();
      setLocale(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLocation = ({ city, state, id }: any) => {
    setLocation({ city, state, id });
    close();
  };

  useEffect(() => {
    onGetLocale();
  }, []);

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
              <SearchBar onChageText={(e: any) => console.log(e)} />
            </SearchBarContainer>
            <FlatList
              data={locale}
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
                        state: item.state,
                        id: item.id,
                      })
                    }
                    imageUri={item.image_file}
                    name={item.city}
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
