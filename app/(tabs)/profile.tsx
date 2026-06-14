import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen() {
  const [name, setName] = useState("");

  useEffect(() => {
    loadName();
  }, []);

  const saveName = async () => {
    await AsyncStorage.setItem(
      "profileName",
      name
    );
  };

  const loadName = async () => {
    const savedName =
      await AsyncStorage.getItem("profileName");

    if (savedName) {
      setName(savedName);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Profile Name</Text>
     <TextInput
     style={styles.input}
     value={name}
     onChangeText={setName}
     placeholder="Enter name"
     placeholderTextColor="#888"
/>

      <TouchableOpacity
        style={styles.button}
        onPress={saveName}
      >
        <Text style={styles.buttonText}>
          Save Name
        </Text>
      </TouchableOpacity>

    <Text style={styles.label}>Current Name:</Text>
<Text style={styles.savedText}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  label: {
    color: "white",
    fontSize: 16,
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },

  button: {
    backgroundColor: "green",
    padding: 15,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  savedText: {
    color: "white",
    fontSize: 18,
    marginTop: 8,
  },
});
