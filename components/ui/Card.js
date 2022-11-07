import { View, StyleSheet } from "react-native";

function Card({children}) {
    return <View style={styles.card}>{children}</View>
}

export default Card;

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: "#3b021f",
        elevation: 4,
      },
})