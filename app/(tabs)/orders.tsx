import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CartScreen() {
  const [note, setNote] = useState("");

  useEffect(() => {
    loadNote();
  }, []);

  const saveNote = async () => {
    await AsyncStorage.setItem("cartNote", note);
  };

  const loadNote = async () => {
    const savedNote =
      await AsyncStorage.getItem("cartNote");

    if (savedNote) {
      setNote(savedNote);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Special Instructions</Text>

      <TextInput
        style={[styles.input, { color: "white" }]}
        value={note}
        onChangeText={setNote}
        placeholder="Extra sugar..."
        placeholderTextColor="#888"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={saveNote}
      >
        <Text style={styles.buttonText}>
          Save Note
        </Text>
      </TouchableOpacity>

      <Text>Last Saved Note:</Text>
      <Text>{note}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },

  input: {
    borderWidth: 1,
    borderColor: "#666",
    backgroundColor: "#222",
    color: "white",
    padding: 10,
    marginVertical: 10,
  },

  button: {
    backgroundColor: "#444",
    padding: 12,
    alignItems: "center",
    borderRadius: 6,
    marginVertical: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
  },

  label: {
    color: "white",
  },

  savedText: {
    color: "white",
  },
});