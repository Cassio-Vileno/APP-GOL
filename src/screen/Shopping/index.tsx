import React from "react";
import { Controller, useForm } from "react-hook-form";

import { Container, ContainerForm, Content } from "./styles";

import Header from "../../components/molecules/Header";
import Row from "../../components/atoms/Row";
import InputSelect from "../../components/atoms/InputSelect";
import InputSelectCity from "../../components/molecules/InputSelectCity";
import InputCalendar from "../../components/molecules/InputCalendar";
import InputTravelers from "../../components/molecules/InputTravelers";

export default function Shopping(): JSX.Element {
  const {
    handleSubmit,
    control,
    setValue,
    setError,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <Header />
      <Content>
        <ContainerForm>
          <Row width={48}>
            <Controller
              rules={{
                required: { value: true, message: "Campo obrigatório" },
              }}
              name="origin"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputSelectCity
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
                  placeholder="Destino"
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
              name="match"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputCalendar
                  placeholder="Partida"
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
              name="return"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputCalendar
                  placeholder="Retorno"
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
        </ContainerForm>
      </Content>
    </Container>
  );
}
