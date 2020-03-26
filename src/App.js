import React, { Component } from "react";
import { Button, Image, Text, View, TextInput } from "react-native";

class App extends Component {
  render() {
    return (

<View style={{ alignItems: "center" }}>
  <TextInput
    style={{ height: 40, borderColor: "neon orange", borderWidth: 1 }}
    onChangeText={function() {}}
    value={""}
    placeholder = "search sport"
    />
    <Text
      style={{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "60px"
      }}>
      my future
      </Text>
    <Text
    style={{
        textAlign: "center",
        fontSize: "30px",
        color: "#4169e1"

}}>
      get to the next levels: see other athletes schedules
      {'\n'}  </Text>
    <View
      style = {{flexDirection:"row" ,justifyContent:"space-around",}}>
      <Button onPress={() => {}} title="High School" />
      <Text>  </Text>
      <Button onPress={() => {}} title="College" />
      <Text>  </Text>
      <Button onPress={() => {}} title="Pro" />
    </View>

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
  </View>
);
}
}


export default App;
