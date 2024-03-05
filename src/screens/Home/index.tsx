import { Text, TextInput, View } from "react-native"
import { styles } from "./style"


export const Home = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>What do you want to watch?</Text>
            <View style={styles.containerInput}>
                <TextInput placeholder="Search"></TextInput>
            </View>
        </View>
    )
}