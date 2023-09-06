import { Button, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {

    item: String,
    onRemove: () => void
} 

export function Itens(props : Props) {

    return(

        <View style={styles.container} >

            <Text style={styles.name} >{props.item}</Text>

            <TouchableOpacity style={styles.button} onPress={props.onRemove} >

                <Text style={styles.textButton} >-</Text>
            </TouchableOpacity>
        </View>
    )
}
