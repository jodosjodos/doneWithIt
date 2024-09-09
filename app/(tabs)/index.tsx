import React, { useState } from "react";
import { Text, View, Image, Button } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const CatApp = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [text, setText] = useState("");
  return (
    <ScrollView>
      <View>
        <Text>hello it is umushi gang</Text>
        {isAvailable ? "name" : "not name"}
        <Button
          onPress={() => {
            setIsAvailable((prev) => !prev);
          }}
          title="change state"
          disabled={!isAvailable}
        />
        <TextInput
          placeholder="email"
          style={{ height: 30, backgroundColor: "red" }}
          onChangeText={(newText) => setText(newText)}
        />
        <Text>{text}</Text>
      </View>
      
     
    </ScrollView>
  );
};

export default CatApp;
