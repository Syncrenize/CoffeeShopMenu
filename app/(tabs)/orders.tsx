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
        style={styles.input}
        value={note}
        onChangeText={setNote}
        placeholder="Extra sugar..."
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
    padding: 20,
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
});