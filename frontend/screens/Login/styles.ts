import { SafeAreaView } from "react-native-safe-area-context";

import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #05132a;
  padding: 30px;
`;

export const Header = styled.View`
  display: flex;
  flex: 1;

  justify-content: center;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;

  background-color: #efefef;

  margin-bottom: 40px;
`;

export const Bottom = styled.View`
  height: 80px;

  display: flex;
  flex-direction: row;
  width: 100%;

  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 70px;
  color: #efefef;
`;

export const Subtitle = styled.Text`
  margin-top: 30px;
  font-size: 20px;
  color: #efefef;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 48%;
  height: 60px;
  background-color: #0000;
  /* color: #05132a; */

  border: solid;
  border-color: #478eef;
  border-radius: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  color: #478eef;
`;

export const BlueBold = styled.Text`
  color: #478eef;
  font-weight: bold;
`;
