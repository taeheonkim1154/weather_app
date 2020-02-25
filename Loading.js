import React from "react";
import {StyleSheet, Text, View, Image, StatusBar} from "react-native";

export default function Loading(){
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"}/>
            <Image style={styles.image} source={require("./logo.png")}/>
            <Text style={styles.text}>Show Me the Weather</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    text:{
        fontSize: 30,
        color: "white"
    },
    image:{
        width: 300,
        height: 300
    }
});
