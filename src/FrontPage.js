import React, { Component } from "react";
import { Button, Image, Text, View, TextInput } from "react-native";
import {Panels, DropdownContent} from "./VACComponentLibrary/Components.js"; 
class App extends Component {

  render() {
      var that= this;
    return (

<View style={{ alignItems: "center" }}>

    <Text
      style={{
        paddingBottom:"40px",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "60px"
      }}>
      MY FUTURE

      </Text>
    <Text
    style={{
        textAlign: "center",
        fontSize: "60px",
        color:"black"}}>
        </Text>
        <Text
        style={{paddingBottom:"60px",paddingTop:"40px",fontWeight:"bold", fontSize:"30px"}}>
      Get to the Next Level: See Other Athletes Daily Schedules
      {'\n'}  </Text>



      <View
        style = {{flexDirection:"row" ,justifyContent:"space-around",}}>
        <Button onPress={() => {that.props.parent.setState({destination:"SecondPage" })}} title="ice hockey" />
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Button onPress={() => {that.props.parent.setState({destination:"ThirdPage"})}} title="football" />
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Button onPress={() => {that.props.parent.setState({destination:"FourthPage"})}} title="lacrosse" />
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Button onPress={() => {that.props.parent.setState({destination:"FifthPage"})}} title="basketball" />
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Button onPress={() => {that.props.parent.setState({destination:"SixthPage"})}} title="baseball" />
      </View>

      <View
        style = {{flexDirection:"row" ,paddingTop:"20px",}}>
        <Button onPress={() => {that.props.parent.setState({destination:"Abouttheplayers" })}} title="About the players" />
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
  </View>
  </View>
);
}
}


export default App;
