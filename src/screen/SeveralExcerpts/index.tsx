import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Container, ContainerForm, Content, SeparationLine } from "./styles";

import ButtonPrimary from "../../components/molecules/ButtonPrimary";
import Checkbox from "../../components/atoms/Checkbox";
import { Paragraph } from "../../components/atoms/Paragraph";
import Row from "../../components/atoms/Row";
import InputCalendar from "../../components/molecules/InputCalendar";
import InputSelectCity from "../../components/molecules/InputSelectCity";
import InputText from "../../components/molecules/InputText";
import InputTravelers from "../../components/molecules/InputTravelers";
import useDebounce from "../../hooks/useDebounce";
import { LocaleService, LocaleType } from "../../services/locale.service";
import { useDialog } from "../../hooks/useDialog";

export default function SeveralExcerpts(): JSX.Element {
  const [promotionalCode, setPromotionalCode] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [locale, setLocale] = useState<LocaleType[]>([]);
  const debouncedSearchTerm = useDebounce(searchCity, 700);
  const { openDialog, closeDialog } = useDialog();

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

  const onSubmit = (data: any) => {
    console.log(data);
    openDialog({
      title: "Sucesso",
      subtitle: "Busca feita com sucesso",
      buttonText: "Ok",
      buttonPress: () => {
        closeDialog();
      },
    });
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
                required: {
                  value: true,
                  message: "Campo viajantes é obrigatório",
                },
              }}
              name="fristTravelers"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputTravelers
                  placeholder="Viajantes"
                  value={value}
                  onChangeText={onChange}
                  error={errors.fristTravelers}
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
                required: {
                  value: true,
                  message: "Campo origem é obrigatório",
                },
              }}
              name="fristOrigin"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputSelectCity
                  citys={filteredData}
                  onSearch={setSearchCity}
                  placeholder="Origem"
                  value={value}
                  onChangeText={(e: any) => {
                    onChange(e);
                  }}
                  error={errors.fristOrigin}
                />
              )}
            />
          </Row>
          <Row width={48}>
            <Controller
              rules={{
                required: {
                  value: true,
                  message: "Campo destino é obrigatório",
                },
              }}
              name="fristDestiny"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputSelectCity
                  citys={filteredData}
                  onSearch={setSearchCity}
                  placeholder="Destino"
                  value={value}
                  onChangeText={(e: any) => {
                    onChange(e);
                  }}
                  error={errors.fristDestiny}
                />
              )}
            />
          </Row>
          <Row>
            <Controller
              rules={{
                required: { value: true, message: "Campo Data é obrigatório" },
              }}
              name="fristMatch"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputCalendar
                  placeholder="Data"
                  value={value}
                  onChangeText={onChange}
                  error={errors.fristMatch}
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
                required: {
                  value: true,
                  message: "Campo origem é obrigatório",
                },
              }}
              name="secondOrigin"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputSelectCity
                  citys={filteredData}
                  onSearch={setSearchCity}
                  placeholder="Origem"
                  value={value}
                  onChangeText={onChange}
                  error={errors.secondOrigin}
                />
              )}
            />
          </Row>
          <Row width={48}>
            <Controller
              rules={{
                required: {
                  value: true,
                  message: "Campo destino é obrigatório",
                },
              }}
              name="secondDestiny"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputSelectCity
                  citys={filteredData}
                  onSearch={setSearchCity}
                  placeholder="Destino"
                  value={value}
                  onChangeText={onChange}
                  error={errors.secondDestiny}
                />
              )}
            />
          </Row>
          <Row>
            <Controller
              rules={{
                required: { value: true, message: "Campo data é obrigatório" },
              }}
              name="secondMatch"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputCalendar
                  placeholder="Data"
                  value={value}
                  onChangeText={onChange}
                  error={errors.secondMatch}
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
                    name="promotionalCode"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <InputText
                        placeholder="Código"
                        value={value}
                        onChangeText={onChange}
                        error={errors.promotionalCode}
                      />
                    )}
                  />
                </Row>
              ) : null}
            </Row>
          </Row>
          <ButtonPrimary onPress={handleSubmit(onSubmit)}>
            Buscar passagens
          </ButtonPrimary>
        </ContainerForm>
      </Content>
    </Container>
  );
}
