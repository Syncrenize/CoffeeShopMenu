import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  const [name, setName] = useState("");

  useEffect(() => {
    loadName();
  }, []);

  const saveName = async () => {
    try {
      await AsyncStorage.setItem("profileName", name);
      Alert.alert("Success", "Name saved successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to save name.");
    }
  };

  const loadName = async () => {
    try {
      const savedName = await AsyncStorage.getItem("profileName");
      if (savedName) {
        setName(savedName);
      }
    } catch (error) {
      console.log(error);
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

      <TouchableOpacity style={styles.button} onPress={saveName}>
        <Text style={styles.buttonText}>Save Name</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Current Name:</Text>
      <Text style={styles.savedText}>{name || "No name saved yet."}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },

  label: {
    color: "white",
    fontSize: 16,
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#666",
    backgroundColor: "#111",
    color: "white", // THIS makes typed text visible
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  savedText: {
    color: "white",
    fontSize: 18,
    marginTop: 8,
  },
});