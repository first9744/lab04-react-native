import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Forecast(props) {
    return (
        <View>
            <View style= {{
                flexDirection: "row",
                justifyContent: 'center',
            }}>
                <Text style={style.tempNum}>{props.temp} °C</Text>
                
            </View>
            
            <Text style={style.titleText}>{props.main}</Text>
            <Text style={style.titleText}>----------------------------------------------</Text>
            <View style= {{
                flexDirection: "row",
                justifyContent: 'space-between',
            }}>
                <View>
                    <Text style={style.normalText}>Humidity {props.humidity} %  </Text>
                    <Text style={style.normalText}>Feel Like {props.feels_like} °C    </Text>
                </View>
                
                <View>
                    <Text style={{textAlign: 'right', fontSize: 20,fontWeight: "bold",color: 'white'}}>description</Text>
                    <Text style={style.normalText}>{props.description}</Text>
                </View>

            </View>
           
            <Text style={style.titleText}>----------------------------------------------</Text>


            </View> 
    );
}
const style = StyleSheet.create(
    {
        normalText: {
            textAlign: 'left',
            fontSize: 20,
            fontWeight: "bold",
            color: 'white',
            
        },
        tempNum: {
            fontSize: 50, 
            fontWeight: "bold", 
            color: 'white', 
            textAlign: 'center',
            lineHeight: 100,

        },

        titleText: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: "bold",
            color: 'white',
        }
    }
) 