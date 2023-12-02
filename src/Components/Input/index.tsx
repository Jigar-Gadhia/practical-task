import { TextInput, View } from 'react-native';
import { Colors } from '../../assets/Colors';

type Props = {
    borderBottom?: boolean;
    icon?: any;
    placeholder?: string;
    value?: string;
    secure?: boolean;
    onChange?: any;
}

const Input: React.FC<Props> = ({ borderBottom, icon, placeholder, value, secure, onChange }) => {
    return (
        <View style={{
            borderBottomWidth: borderBottom ? 0.5 : 0,
            backgroundColor: Colors.White,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-start",
            elevation: 5
        }}>
            <View style={{ marginLeft: "8%" }}>
                {icon}
            </View>
            <TextInput
                style={{ width: '100%', fontSize: 18, marginLeft: 10, marginVertical: 7, color: Colors.Grey }}
                placeholder={placeholder}
                value={value}
                placeholderTextColor={Colors.Grey}
                secureTextEntry={secure ? true : false}
                onChangeText={onChange}
            />
        </View>
    );
}

export default Input;
