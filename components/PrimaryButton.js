// 따로 만든 버튼 컴포넌트
// 버튼을 만들 때 반드시 이해해야 하는 것은 핵심 컴포넌트들을 합치는 것
import { Text, View, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({children, onPress}) {


    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={styles.buttonInnerContainer}
                android_ripple={{ color: '#640233' }}
                onPress={onPress}
                >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View >
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
});