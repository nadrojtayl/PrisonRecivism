import React, { Component } from "react";
import { Button, Image, Text, View, TextInput } from "react-native";

class App extends Component {

  render() {
      var that= this;
    return (

<View style={{ alignItems: "center" }}>

    <Text
      style={{{paddingTop:"60px"}}>
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "60px"
      }}>

      MY FUTURE
      <Text>  </Text>
      <Text>  </Text>
      </Text>
      <Button onPress={() => {that.props.parent.setState({destination:"SecondPage"})}} title="Example button" />
    <Text
    style={{
        textAlign: "center",
        fontSize: "40px",
        color:"black"}}>
        </Text>
        <Text
        style={{paddingTop:"60px"}}>
      Get to the Next Level: See Other Athletes Schedules
      {'\n'}  </Text>


      <View
        style = {{flexDirection:"row" ,justifyContent:"space-around",}}>
        <Button onPress={() => {}} title="ice hockey" />
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Button onPress={() => {}} title="football" />
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Button onPress={() => {}} title="lacrosse" />
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Button onPress={() => {}} title="basketball" />
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Button onPress={() => {}} title="baseball" />
      </View>
  </View>
);
}
}


export default App;
