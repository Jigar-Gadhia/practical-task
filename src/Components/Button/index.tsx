import { Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = {
    backgroundColor?: string;
    title?: string;
    onPress?: () => void;
}

const Button: React.FC<Props> = ({ backgroundColor, title, onPress }) => {
    return (
        <TouchableOpacity style={{
            height: "100%",
            width: "100%",
            backgroundColor: backgroundColor,
            alignItems: "center",
            justifyContent: "center",
            elevation: 5
        }}
            onPress={onPress}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;
