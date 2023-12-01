import {Text, TextInput, TouchableOpacity, View} from 'react-native';

type Props = {
    backgroundColor?: string;
    title?: string;
}

const Button: React.FC<Props> = ({ backgroundColor, title }) => {
    return (
        <TouchableOpacity style={{backgroundColor: backgroundColor, flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text style={{fontWeight: "bold", fontSize: 20, marginBottom: "2%"}}>{title}</Text>
        </TouchableOpacity>
    );
 }

 export default Button;
 