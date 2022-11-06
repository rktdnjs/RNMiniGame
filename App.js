import { StyleSheet} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={['#ddb52f', '#4e0329']} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

// 필요한 공간만 차지하는게 기본 설정임을 항상 유의하자.
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  }
});
