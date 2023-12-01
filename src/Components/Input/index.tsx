import { TextInput, View } from 'react-native';
import { Colors } from '../../assets/Colors';

type Props = {
    borderBottom?: boolean;
    icon?: any;
    placeholder?: string;
    value?: string;
    secure?: boolean;
}

const Input: React.FC<Props> = ({ borderBottom, icon, placeholder, value, secure }) => {
    return (
        <View style={{
            flex: 1,
            borderBottomWidth: borderBottom ? 1 : 0,
            backgroundColor: Colors.White,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-start"
        }}>
            <View style={{ marginLeft: "8%" }}>
                {icon}
            </View>
            <TextInput
                style={{ fontSize: 18, marginLeft: 10, marginVertical: 7, color: Colors.Grey }}
                placeholder={placeholder}
                value={value}
                placeholderTextColor={Colors.Grey}
                secureTextEntry={secure ? true : false}
            />
        </View>
    );
}

export default Input;
