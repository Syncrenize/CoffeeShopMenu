import React from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type MenuItem = {
  id: string;
  category: string;
  name: string;
};

export default function Index() {
  const menuItems: MenuItem[] = [
    {
      id: "1",
      category: "Hot Drinks",
      name: "Americano",
    },
    {
      id: "2",
      category: "Hot Drinks",
      name: "Latte",
    },
    {
      id: "3",
      category: "Desserts",
      name: "Cheesecake",
    },
    {
      id: "4",
      category: "Desserts",
      name: "Brownie",
    },

    // New Menu Items
    {
      id: "5",
      category: "Cold Drinks",
      name: "Iced Coffee",
    },
    {
      id: "6",
      category: "Cold Drinks",
      name: "Caramel Frappuccino",
    },
    {
      id: "7",
      category: "Pastries",
      name: "Croissant",
    },
  ];

  const showItem = (itemName: string) => {
    Alert.alert("Menu Item", itemName);
  };

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.card}>
      <Text style={styles.category}>{item.category}</Text>

      <Text style={styles.itemName}>{item.name}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => showItem(item.name)}
      >
        <Text style={styles.buttonText}>View Item</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fame's Coffee House Menu</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },

  card: {
    borderBottomWidth: 1,
    borderBottomColor: "#888",
    paddingVertical: 15,
  },

  category: {
    color: "#999",
    fontSize: 14,
  },

  itemName: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },

  button: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 5,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});