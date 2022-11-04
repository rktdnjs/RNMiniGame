// 따로 만든 버튼 컴포넌트
// 버튼을 만들 때 반드시 이해해야 하는 것은 핵심 컴포넌트들을 합치는 것
import { Text, View } from 'react-native';

function PrimaryButton(props) {
    return (
        <View>
            <Text>{props.children}</Text>
        </View>
    )
}

export default PrimaryButton