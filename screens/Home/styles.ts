import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    home : {
        flex:1,
        paddingTop:25,
        paddingHorizontal:25,
        backgroundColor:'#131016',
        gap: 5
    },

    title :{
        color: '#FDFCFE',
        fontSize:25,
        fontWeight:'bold',
        paddingTop: 25
    },

    subTitle :{
        color: '#FDFCFE',
    },

    text :{
        color: '#FDFCFE',
        fontSize:9,
        textAlign: "center",
        paddingTop: 10
    },

    button :{
        borderRadius:10,
        height: 50,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textButton :{
        fontSize: 15,
        color: '#FFFFFF'
    },

    input :{
        height:50,
        backgroundColor: '#1F1E25',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
        color: '#ffffff'
    },

    conteiner :{
        marginTop: 24,
        gap: 10
    }
})