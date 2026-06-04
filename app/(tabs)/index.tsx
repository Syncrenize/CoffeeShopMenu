import { router } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CoffeeItem = {
  id: string;
  category: string;
  name: string;
  price: string;
  description: string;
};

export default function HomeScreen() {
  const coffeeData: CoffeeItem[] = [
    {
      id: "1",
      category: "Hot Drinks",
      name: "Americano",
      price: "₱120",
      description: "Bold and strong black coffee brewed with espresso shots.",
    },
    {
      id: "2",
      category: "Hot Drinks",
      name: "Cappuccino",
      price: "₱150",
      description: "Espresso with steamed milk and foam.",
    },
    {
      id: "3",
      category: "Hot Drinks",
      name: "Latte",
      price: "₱160",
      description: "Creamy espresso drink with milk.",
    },
    {
      id: "4",
      category: "Cold Drinks",
      name: "Iced Coffee",
      price: "₱130",
      description: "Refreshing chilled coffee.",
    },
    {
      id: "5",
      category: "Cold Drinks",
      name: "Frappuccino",
      price: "₱180",
      description: "Blended iced coffee with whipped cream.",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>☕ Coffee Shop Menu</Text>

      <FlatList
        data={coffeeData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/detail",
                params: {
                  category: item.category,
                  name: item.name,
                  price: item.price,
                  description: item.description,
                },
              })
            }
          >
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#F7F2EE",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#8B4513",
    borderRadius: 8,
  },

  category: {
    color: "#999",
    fontSize: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  price: {
    color: "#D2691E",
    fontWeight: "bold",
  },
});