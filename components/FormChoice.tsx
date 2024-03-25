import { Text, View } from "./Themed";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";

const FormChoice = () => {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View>
      <Text>FormChoice</Text>
      <View>
        <Button mode="contained" onPress={() => console.log("add ingredient")}>
          Ajouter un ingredient
        </Button>
        <TextInput
          label="Email"
          value={selectedValue}
          onChangeText={(text) => setSelectedValue(text)}
          mode="outlined"
        />
      </View>
    </View>
  );
};

export default FormChoice;
