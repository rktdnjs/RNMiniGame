// 실질적으로 게임 진행과 관련된 컴포넌트들
import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

// 따로 외부에서 가지고 온 코드임, 그냥 1~99 난수 생성기
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    if ((direction === 'lower' && currentGuess < userNumber) || 
    (direction === 'greater' && currentGuess > userNumber)) {
        Alert.alert("거짓말하지 마세요!!", "잘 못 말씀하신 것 같습니다..", [
            { text : 'Sorry!', style : 'cancel'}
        ])
        return;
    }
    if (direction === "lower") { // 작은 숫자를 추측하세요!
        maxBoundary = currentGuess;
    }
    else {
        minBoundary = currentGuess + 1; // 이런 코드들을 자세히 이해하려고 하진 않아도 됨. 느낌만!
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber)
}

  return (
    <View style={styles.screen}>
      <Title>상대방의 추측</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher OR Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
        </View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
