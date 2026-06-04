import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DetailScreen() {
  const { category, name, price, description } =
    useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.category}>{category}</Text>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.price}>{price}</Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
          ← Back to Menu
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7F2EE",
    justifyContent: "center",
  },

  category: {
    color: "#999",
    fontSize: 14,
  },

  name: {
    fontSize: 32,
    fontWeight: "bold",
  },

  price: {
    fontSize: 24,
    color: "#D2691E",
    marginVertical: 10,
  },

  description: {
    fontSize: 16,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#5C3317",
    padding: 15,
    borderRadius: 8,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});