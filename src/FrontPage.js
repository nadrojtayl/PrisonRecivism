import React, { Component } from "react";
import { Button, Image, Text, View, TextInput } from "react-native";

class App extends Component {
  render() {
    return (

<View style={{ alignItems: "center" }}>

    <Text
      style={{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "60px"
      }}>
      MY FUTURE
      </Text>
    <Text
    style={{
        textAlign: "center",
        fontSize: "40px",
        color:"black"}}>
        </Text>
        <Text
        style={{justifyContent:"space around"}}>
      Get to the Next Level: See Other Athletes Schedules
      {'\n'}  </Text>


      <View
        style = {{flexDirection:"row" ,justifyContent:"space-around",}}>
        <Button onPress={() => {}} title="ice hockey" />
        <Text>  </Text>
        <Button onPress={() => {}} title="football" />
        <Text>  </Text>
        <Button onPress={() => {}} title="lacrosse" />
        <Text>  </Text>
        <Button onPress={() => {}} title="basketball" />
        <Text>  </Text>
        <Button onPress={() => {}} title="baseball" />
      </View>

    <View
      style = {{flexDirection:"row" ,justifyContent:"space-around", paddingTop: "40px"}}>
      <Button onPress={() => {}} title="High School" />
      <Text>  </Text>
      <Button onPress={() => {}} title="College" />
      <Text>  </Text>
      <Button onPress={() => {}} title="Pro" />
    </View>


  </View>
);
}
}


export default App;
