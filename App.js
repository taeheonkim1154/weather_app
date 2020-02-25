import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "efd02732c87204389c9c3a0fc164dd64";

export default class extends React.Component {
  state = {
    isLoading : true
  };
  getWeather = async(latitude, longitude) => {
    const { data: {
      main:{temp, temp_min, temp_max, humidity},
      weather
    } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    // 위 url 가보면, 날씨데이터를 어떤 형식으로 가져오는지 나옴. 거기서 필요한 것들만 가져오면 된다!
    this.setState({isLoading:false, condition: weather[0].main, temp: temp, temp_max: temp_max, temp_min: temp_min, humidity: humidity});
  };
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
    } catch(error){
      Alert.alert("🥺", "위치 정보 제공에 동의해주세요!")
    }
  };
  componentDidMount(){
    this.getLocation();
  };
  render(){
    const { isLoading, temp, condition, temp_max, temp_min, humidity } = this.state;
    return (
        // 아래와 같은 방식으로 변수를 전달해줄 수 있다.
        isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} temp_max={temp_max} temp_min={temp_min} humidity={humidity}/>
    );
  };
}