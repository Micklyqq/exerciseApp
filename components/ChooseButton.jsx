import { Text, View, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

const ButtonText = styled.Text`
  color: #232222;
  text-align: center;

  font-size: 20px;
`;

const ButtonDesign = styled.View`
  width: 300px;
  height: 50px;
  border-radius: 20px;
  background: #8dd149;
`;
export default function ChooseButton({ text }) {
  const [fontsLoaded] = useFonts({
    "Literata-Bold": require("../assets/fonts/Literata/Literata-Bold.ttf"),
    "Literata-Regular": require("../assets/fonts/Literata/Literata-Regular.ttf"),
  });

  return (
      <ButtonDesign>
        <ButtonText>{text}</ButtonText>
      </ButtonDesign>
  );
}
