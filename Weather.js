import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
// icon들 중 MaterialCommunityIcons 디렉토리에 있는 아이콘들을 쓰기 위해서...

const weatherOptions = {
    Haze: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "안개 낀 하루",
        subtitle: "안개가 짙게 낀 하루에요. 운전할 때 조심하세요!"
    },
    Thunderstorm: {
        iconName: "weather-lighning",
        gradient: ["#BBD2C5", "#536976", "#292E49"],
        title: "천둥번개",
        subtitle: "천둥번개가 치는 하루. 이럴 땐 치킨 먹어야죠"
    },
    Drizzle: {
        iconName: "weather-windy-variant",
        gradient: ["#acb6e5","#86fde8"],
        title: "이슬비",
        subtitle: "이슬비가 보슬보슬~ 기분 좋은 하루 보내세요"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#2C5364", "#203A43", "#0F2027"],
        title: "비",
        subtitle: "비가 오는 하루. 우산 꼭 챙기세요!"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#076585", "#fff"],
        title: "눈",
        subtitle: "하늘에서 하얗고 예쁜 쓰레기가 내린다..."
    },
    Atmosphere: {
        iconName: "waves",
        gradient: ["#EC6EAD", "#3494E6"],
        title: "화창함",
        subtitle: "화창한 하루에요. 소풍, 나들이 가기 좋은 하루~"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FFC371", "#FF5F6D"],
        title: "맑음",
        subtitle: "해가 쨍쨍 맑은 하루에요. 비타민D를 위해 광합성을 합시다"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#3f4c6b", "#606c88"],
        title: "흐림",
        subtitle: "구름이 낀 하루. 그래도 웃어요"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#4CA1AF", "#2C3E50"],
        title: "옅은 안개",
        subtitle: "옅은 안개가 끼고 습도가 높은 하루에요"
    },
    Dust: {
        iconName: "weather-windy",
        gradient: ["#F3904F", "#3B4371"],
        title: "미세먼지",
        subtitle: "우엑. 우엑. 콜록콜록. 쾍쾍"
    }
}

export default function Weather({temp, condition, temp_min, temp_max, humidity}){
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle={"light-content"}/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={100} color="white" />
                <Text style={styles.temperature}>현재 {temp} 도</Text>
                <Text style={styles.subTemperature}>최고 {temp_max} 도</Text>
                <Text style={styles.subTemperature}>최저 {temp_min} 도</Text>
                <Text style={styles.subTemperature}>습도 {humidity} %</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    temp_max: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Haze", "Drizzle", "Rain", "Snow", "Atmosphere", "clear", "Clouds"]).isRequired,
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temperature:{
        fontSize: 40,
        color: "white"
    },
    subTemperature:{
        color: "white",
        fontSize: 20,
        marginVertical: 3
    },
    title : {
        fontSize: 35,
        color: "white",
        marginBottom: 15
    },
    subtitle:{
        fontSize: 25,
        color: "white",
    },
    halfContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40
    }
})