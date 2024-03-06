import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242A32',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 35,
        paddingBottom: 20,
        paddingHorizontal: 24
    },
    headerText: {
        color: '#ECECEC',
        fontSize: 16,
        fontWeight: '700'
    },
    bannerImage: {
        position: 'absolute',
        width: '100%',
        height: 210,
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
    },
    posterImage: {
        width: 100,
        height: 160,
        borderRadius: 8,
        left: 29,
        right: 251,
        top: 140
    },
    titleMovie: {
        position: "absolute",
        height: 50,
        left: 140,
        right: 32,
        top: 240,
        color: "#fff",
        fontSize: 18,
        lineHeight: 27,
        fontWeight: "700",
    },
    description: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        marginTop: 170
    },
    descriptionGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    }
    , descriptionText: {
        fontSize: 12,
        color: '#92929D',
        fontWeight: '500'
    },
    about: {
        padding: 20,
    },
    aboutText: {
        color: "#fff",
        textAlign: "justify",
    },
    sinopse: {
        marginTop: 24,
        fontSize: 16,
        paddingBottom: 8
    }
})