import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Container, ContainerForm, Content, SeparationLine } from "./styles";

import Row from "../../components/atoms/Row";
import InputSelectCity from "../../components/molecules/InputSelectCity";
import InputCalendar from "../../components/molecules/InputCalendar";
import InputTravelers from "../../components/molecules/InputTravelers";
import ButtonPrimary from "../../components/atoms/ButtonPrimary";
import Checkbox from "../../components/atoms/Checkbox";
import InputText from "../../components/atoms/InputText";
import InputSelect from "../../components/atoms/InputSelect";
import { LocaleService, LocaleType } from "../../services/locale.service";
import useDebounce from "../../hooks/useDebounce";
import { Paragraph } from "../../components/atoms/Paragraph";

export default function SeveralExcerpts(): JSX.Element {
  const [promotionalCode, setPromotionalCode] = useState(false);
  const [stopover, setStopover] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [locale, setLocale] = useState<LocaleType[]>([]);
  const debouncedSearchTerm = useDebounce(searchCity, 700);

  const filteredData = locale.filter((item) =>
    item.city.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const onGetLocale = async () => {
    try {
      const res = await LocaleService.findAll();
      setLocale(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetLocale();
  }, []);

  const {
    handleSubmit,
    control,
    setValue,
    setError,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <Content>
        <ContainerForm>
          <Row>
            <Controller
              rules={{
                required: { value: true, message: "Campo obrigatório" },
              }}
              name="travelers"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputTravelers
                  placeholder="Viajantes"
                  value={value}
                  onChangeText={onChange}
                  error={errors.gender}
                />
              )}
            />
          </Row>
          <SeparationLine>
            <Paragraph>Primeiro trecho</Paragraph>
          </SeparationLine>
          <Row width={48}>
            <Controller
              rules={{
                required: { value: true, message: "Campo obrigatório" },
              }}
              name="origin"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputSelectCity
                  citys={filteredData}
                  onSearch={setSearchCity}
                  placeholder="Origem"
                  value={value}
                  onChangeText={onChange}
                  error={errors.gender}
                />
              )}
            />
          </Row>
          <Row width={48}>
            <Controller
              rules={{
                required: { value: true, message: "Campo obrigatório" },
              }}
              name="destiny"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputSelectCity
                  citys={filteredData}
                  onSearch={setSearchCity}
                  placeholder="Destino"
                  value={value}
                  onChangeText={onChange}
                  error={errors.gender}
                />
              )}
            />
          </Row>
          <Row>
            <Controller
              rules={{
                required: { value: true, message: "Campo obrigatório" },
              }}
              name="match"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputCalendar
                  placeholder="Data"
                  value={value}
                  onChangeText={onChange}
                  error={errors.gender}
                />
              )}
            />
          </Row>

          <SeparationLine>
            <Paragraph>Segundo trecho</Paragraph>
          </SeparationLine>
          <Row width={48}>
            <Controller
              rules={{
                required: { value: true, message: "Campo obrigatório" },
              }}
              name="origin"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputSelectCity
                  citys={filteredData}
                  onSearch={setSearchCity}
                  placeholder="Origem"
                  value={value}
                  onChangeText={onChange}
                  error={errors.gender}
                />
              )}
            />
          </Row>
          <Row width={48}>
            <Controller
              rules={{
                required: { value: true, message: "Campo obrigatório" },
              }}
              name="destiny"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputSelectCity
                  citys={filteredData}
                  onSearch={setSearchCity}
                  placeholder="Destino"
                  value={value}
                  onChangeText={onChange}
                  error={errors.gender}
                />
              )}
            />
          </Row>
          <Row>
            <Controller
              rules={{
                required: { value: true, message: "Campo obrigatório" },
              }}
              name="match"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputCalendar
                  placeholder="Data"
                  value={value}
                  onChangeText={onChange}
                  error={errors.gender}
                />
              )}
            />
          </Row>

          <Row width={100} gap={10}>
            <Row>
              <Checkbox
                onChange={(e) => setPromotionalCode(e)}
                placeholder="Código Promocional"
              />
              {promotionalCode ? (
                <Row mt={15}>
                  <Controller
                    rules={{
                      required: { value: true, message: "Campo obrigatório" },
                    }}
                    name="promotional-code"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <InputText
                        placeholder="Código"
                        value={value}
                        onChangeText={onChange}
                        error={errors.gender}
                      />
                    )}
                  />
                </Row>
              ) : null}
            </Row>
          </Row>
          <ButtonPrimary onPress={() => {}}>Buscar passagens</ButtonPrimary>
        </ContainerForm>
      </Content>
    </Container>
  );
}
