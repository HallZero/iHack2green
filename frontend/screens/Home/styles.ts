import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styled from "styled-components/native";

const deviceScreen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #05132a;
  padding: 30px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 8px;
`;

export const Card = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 162px;
  height: 162px;

  border-radius: 10px;

  background-color: #0b004e;
`;

export const CardText = styled.Text`
  color: #efefef;
  font-size: 17px;
  margin-top: 4px;
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 30px;
`;

export const Profile = styled.Image`
  width: 66px;
  height: 66px;
  border-radius: 10px;
  align-self: center;
  margin-top: 40px;
`;

export const BalanceText = styled.Text`
  color: #efefef;
  font-size: 27px;
  margin-top: 30px;
  margin-bottom: 50px;
  align-self: center;
`;

export const BottomSheetContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  margin-left: 30px;
  margin-right: 30px;
  text-align: center;
`;

export const CloseBottomSheetButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 50px;

  border-radius: 10px;

  background-color: #0b004e;
`;

export const CloseBottomSheetButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const QRCode = styled.Image`
  width: 180px;
  height: 180px;
`;
