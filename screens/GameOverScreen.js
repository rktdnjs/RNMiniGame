// 게임이 끝나면 보여질 화면
import { Text, View, Image, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
      <View>
        <Text style={styles.summaryText}>
          당신의 핸드폰은 숫자 <Text style={styles.highlight}>{userNumber}</Text>를 맞히기 위해 
          <Text style={styles.highlight}>{roundsNumber}</Text>번의 기회를 썼습니다.
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3, // 경계선
    borderColor: '#3b021f',
    overflow: 'hidden', // 이미지의 사각형 모서리를 숨김
    margin: 36
  },
  image: {
    width: '100%', // %값을 설정한 요소의 컨테이너에 비례함
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize : 24,
    textAlign : 'center',
    marginBottom : 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: '#72063c'
  }
})