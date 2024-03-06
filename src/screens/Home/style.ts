import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242A32',
    },
    header:{
        paddingTop: 25,
        paddingHorizontal: 25
    },
    headerText: {
        marginTop: 30,
        fontSize: 24,
        lineHeight: 45,
        color: '#fff',
        fontWeight: '600'
    },
    containerInput: {
        width: '100%',
        backgroundColor: '#3A3F47',
        borderRadius: 15,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: '90%',
        color: '#fff',
    }
})