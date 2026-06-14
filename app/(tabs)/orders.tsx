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

export default function OrdersScreen() {
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");

  useEffect(() => {
    loadNote();
  }, []);

  const saveNote = async () => {
    try {
      await AsyncStorage.setItem("cartNote", note);
      setSavedNote(note);

      Alert.alert("Success", "Note saved successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to save note.");
    }
  };

  const loadNote = async () => {
    try {
      const storedNote = await AsyncStorage.getItem("cartNote");

      if (storedNote) {
        setNote(storedNote);
        setSavedNote(storedNote);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Special Instructions</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. Extra sugar, no ice..."
        placeholderTextColor="#888"
        value={note}
        onChangeText={setNote}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={saveNote}
      >
        <Text style={styles.buttonText}>Save Note</Text>
      </TouchableOpacity>

      <View style={styles.savedContainer}>
        <Text style={styles.savedTitle}>
          Last Saved Note:
        </Text>

        <Text style={styles.savedNote}>
          {savedNote || "No note saved yet."}
        </Text>
      </View>
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
    marginBottom: 8,
    fontSize: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#666",
    backgroundColor: "#222",
    color: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
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

  savedContainer: {
    backgroundColor: "#1b1b1b",
    padding: 15,
    borderRadius: 8,
  },

  savedTitle: {
    color: "#ccc",
    marginBottom: 5,
    fontWeight: "bold",
  },

  savedNote: {
    color: "white",
    fontSize: 16,
  },
});