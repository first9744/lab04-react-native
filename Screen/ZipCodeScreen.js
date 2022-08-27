import React from "react";
import { FlatList, TouchableHighlight } from "react-native";
import { ImageBackground, StatusBar, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Nakhon Si Thammarat', code: '80250' },
    { place: 'Phatthalung', code: '93110' },
    { place: 'Sukhothai', code: '64160' },
    { place: 'Sa Kaeo', code: '27000' },
    { place: 'Kalasin', code: '46130' },
   ]

   const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate("Weather", {zipCode: code})
    }}>

      <>
        <View style= {style.zipItem}>
            <Text style= {style.zipPlace}>{place}</Text>
            <Text style= {style.zipCode}>{code}</Text>
        </View>
        <View>
          <Text style= {{fontSize: 1}}></Text>
        </View>
      </>


    </TouchableHighlight>

)
const _keyExtractor = item => item.code
export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
          <View>
            <FlatList
            data = {availableZipItems}
            key = {_keyExtractor}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
          />
          <StatusBar styte="auto" />
        </View> 
         
    )
}
const style = StyleSheet.create(
    {
      zipItem: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
      zipPlace: {
        flex: 2,
        fontSize: 28,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'right'
      },
      zipCode: {
        flex: 2,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold",
        color: 'white',
        textAlignVertical: 'center'
      },
      backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    } 
  )  