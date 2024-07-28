import React from "react";
import {
  AccountItem,
  Container,
  Label,
  IconItem,
  IconContainer,
  ContainerHeader,
  Content,
} from "./styles";
import Row from "../../components/atoms/Row";
import { useDialog } from "../../hooks/useDialog";
import { useNavigation } from "@react-navigation/native";
import { CONTEXT_DIALOG_MESSAGE } from "../../utils/constants";
import { useAuth } from "../../hooks/useAuth";
import { theme } from "../../theme/default.theme";
import { icons } from "../../utils/icons";
import { Paragraph } from "../../components/atoms/Paragraph";
import HeaderShow from "../../components/molecules/HeaderShow";

export default function Profile() {
  const { user, signOut } = useAuth();
  const navigation = useNavigation<any>();
  const { openDialog, closeDialog } = useDialog();
  const { bin, exit, key, message, pinAdrress, profile, document } = icons;

  const handlerOpenDialog = () => {
    openDialog({
      title: CONTEXT_DIALOG_MESSAGE.title,
      subtitle: CONTEXT_DIALOG_MESSAGE.subtitle,
      buttonText: CONTEXT_DIALOG_MESSAGE.buttonText,
      buttonBack: true,
      buttonPress: () => {
        closeDialog();
        signOut();
      },
    });
  };

  const handleDeleteAccount = async () => {
    openDialog({
      title: "Sucesso",
      subtitle: "Conta deletada com sucesso",
      buttonText: "Ok",
      buttonPress: () => {
        closeDialog();
      },
    });
  };

  const listItems = [
    {
      text: "Informações pessoais",
      icon: profile,
      onPress: () => navigation.navigate("AccountOne"),
    },
    {
      text: "Contatos",
      icon: message,
      onPress: () => navigation.navigate("Contacts"),
    },
    {
      text: "Alterar senha",
      icon: key,
      onPress: () => navigation.navigate("ChangePassword"),
    },
    {
      text: "Endereço",
      icon: pinAdrress,
      onPress: () => navigation.navigate("SignUpAddress"),
    },
    {
      text: "Sair",
      icon: exit,
      onPress: () => handlerOpenDialog(),
    },
    {
      text: "Excluir conta",
      icon: bin,
      onPress: () =>
        openDialog({
          title: "Excluir Conta",
          subtitle:
            "Tem certeza que deseja excluir a sua conta? Esse passo não poderá ser desfeito e todos os seus dados e registros de atividades serão apagados de nossos servidores.",
          buttonText: "Sim",
          buttonBack: true,
          buttonPress: () => {
            closeDialog();
            handleDeleteAccount();
          },
        }),
    },
  ];
  return (
    <Container>
      <ContainerHeader>
        <HeaderShow title="Meus dados" />
      </ContainerHeader>
      <Content>
        <ContainerHeader>
          <Paragraph size={24}>
            Olá, {user.name && user.name.split(" ")[0]}!
          </Paragraph>
        </ContainerHeader>
        {listItems.map((item) => (
          <AccountItem key={item.text} onPress={item.onPress}>
            <IconContainer>
              <IconItem resizeMode="contain" source={item.icon} />
            </IconContainer>
            <Label color={theme.color.NeutralGra} size={14}>
              {item.text}
            </Label>
          </AccountItem>
        ))}
        <Row mt={8} />
      </Content>
    </Container>
  );
}