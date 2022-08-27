import React, { useEffect, useState } from "react";
import { ImageBackground, Text, StyleSheet } from 'react-native';
import { View } from "react-native";
import Forecast from "./Forecast";
import Constants from 'expo-constants';
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState(
        {
            main: 'waiting...',
            description: 'waiting...',
            temp: 0,
            humidity: 'waiting...',
            feels_like: 'waiting...',
        }
    )

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`);
        if (props.zipCode) {
          fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=1aaf926c96e67af0ac9111c5f866f479`
          )
            .then((response) => response.json())
            .then((json) => {
              setForecastInfo({
                main: json.weather[0].main,
                description: json.weather[0].description,
                humidity: json.main.humidity,
                temp: json.main.temp,
                feels_like: json.main.feels_like,
              });
            })
            .catch((error) => {
              console.warn(error);
            });
        }
      }, [props.zipCode]);

    return (
        <ImageBackground source={require('../bg2.png')} style={style.backdrop}>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', width:"100%"}}>
                  <Text style={style.titleText}>ZipCode : {props.zipCode}.</Text>
                </View>
            <View style={style.highlight}>
                <Forecast {...forecastInfo}/>

            </View>

        </ImageBackground>
    );
}

const style = StyleSheet.create(
    {
        backdrop: {

            width: '100%',
            height: '100%'
        },
        highlight: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            width:"100%",  
            height:"85%", 
            paddingTop: Constants.statusBarHeight, 
            alignItems: 'center',
                flexDirection: "row",
                justifyContent: 'center',
                alignItem: 'left'

        },

        titleText: {
            fontSize: 30,
            fontWeight: "bold",
            color: 'white',
            textAlign: 'center'
        }
    }
)