import { Dimensions, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  User,
  Bell,
  PaperPlaneTilt,
  ArchiveBox,
  ClockCounterClockwise,
  UsersFour,
} from "phosphor-react-native";

import {
  BalanceText,
  BottomSheetContainer,
  Card,
  CardText,
  CloseBottomSheetButton,
  CloseBottomSheetButtonText,
  Container,
  Header,
  Profile,
  QRCode,
  Row,
  Subtitle,
  Title,
} from "./styles";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef } from "react";

const deviceScreen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export function Home() {
  const route = useRoute();
  const navigation = useNavigation();

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ["50%"], []);

  function handleOpenCamera() {
    navigation.navigate("Scanner" as never, { token: "" } as never);
  }

  function handleOpenQrCode() {
    bottomSheetRef.current?.present();
  }

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  console.log({ deviceScreen });

  return (
    <Container>
      <Header>
        <User color="#efefef" weight="light" size={32} />
        <Bell color="#efefef" weight="light" size={32} />
      </Header>

      <Profile source={require("")} />

      <BalanceText>R$ 10.000</BalanceText>

      <Row>
        <Card onPress={handleOpenCamera}>
          <PaperPlaneTilt color="#efefef" weight="fill" size={32} />
          <CardText>Send</CardText>
        </Card>
        <Card onPress={handleOpenQrCode}>
          <ArchiveBox color="#efefef" weight="fill" size={32} />
          <CardText>Request</CardText>
        </Card>
      </Row>

      <Row>
        <Card>
          <ClockCounterClockwise color="#efefef" weight="fill" size={32} />
          <CardText>Transactions</CardText>
        </Card>
        <Card>
          <UsersFour color="#efefef" weight="fill" size={32} />
          <CardText>Friends</CardText>
        </Card>
      </Row>

      <BottomSheetModal
        ref={bottomSheetRef}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        onDismiss={() => bottomSheetRef.current?.close()}
      >
        <BottomSheetContainer>
          <Title>Seu QR-code</Title>
          <Subtitle>
            Compartilhe seu QR code para realizar pagamentos.
          </Subtitle>
          <QRCode source={require("../../../assets/qr-code.png")} />
          <CloseBottomSheetButton
            onPress={() => bottomSheetRef.current?.close()}
          >
            <CloseBottomSheetButtonText>Voltar</CloseBottomSheetButtonText>
          </CloseBottomSheetButton>
        </BottomSheetContainer>
      </BottomSheetModal>
    </Container>
  );
}
