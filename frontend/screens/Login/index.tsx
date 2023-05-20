import { useEffect } from "react";

import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import * as LocalAuthentication from "expo-local-authentication";

import {
  BlueBold,
  Bottom,
  Button,
  ButtonText,
  Container,
  Header,
  Subtitle,
  Title,
} from "./styles";

export function Login() {
  const route = useRoute();
  const navigation = useNavigation();

  async function localAuthenticationCanBeUsed() {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();

    if (!compatible) {
      return Alert.alert(
        "Login",
        `This device doesn't support login with biometry. Types: ${types}`
      );
    }
  }

  async function handleAuthentication() {
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!isBiometricEnrolled) {
      return Alert.alert("Login", "Não foi possível encontrar uma biometria neste dispositivo.");
    }

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Autenticação com biometria",
    });

    if (auth.success) {
      navigation.navigate("Home" as never, { token: "" } as never);
    }
  }

  useEffect(() => {
    localAuthenticationCanBeUsed();
  }, []);

  return (
    <SafeAreaView edges={["bottom"]}>
      <Container>
        <Header>
          <Title style={{ fontFamily: "Roboto_300Light" }}>
            Instant{"\n"}Payment{"\n"}Em qualquer lugar{"\n"}Do Mundo!
          </Title>

          <Subtitle style={{ fontFamily: "Roboto_300Light" }}>
            Send money to <BlueBold>em qualquer lugar</BlueBold> do Brasil{" "}
            <BlueBold>cheap</BlueBold> and <BlueBold>easy</BlueBold>.
          </Subtitle>
        </Header>

        <Bottom>
          <Button onPress={handleAuthentication}>
            <ButtonText>LOG IN</ButtonText>
          </Button>
          <Button>
            <ButtonText>ABRA UMA CONTA</ButtonText>
          </Button>
        </Bottom>
      </Container>
    </SafeAreaView>
  );
}
