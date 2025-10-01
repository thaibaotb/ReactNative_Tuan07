import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";


const Stack = createNativeStackNavigator();

const bikes = [
  {
    id: "1",
    name: "Pinarello",
    price: 1800,
    image: "https://res.cloudinary.com/deffewpuq/image/upload/v1759279556/b657871f5c0d8c0f67fc78f523516fd7768fec28_wwq1zl.png",
  },
  {
    id: "2",
    name: "Pina Mountai",
    price: 1700,
    image: "https://res.cloudinary.com/deffewpuq/image/upload/v1759281265/49d52b9b68c70d4381b662e07d65fdb7c3846000_xss9gm.png",
  },
  {
    id: "3",
    name: "Pina Bike",
    price: 1500,
    image: "https://res.cloudinary.com/deffewpuq/image/upload/v1759281264/241c1c5811168d8e6671f151053b8a6c8424a1a8_bh6kel.png",
  },
   {
    id: "4",
    name: "Pina Pipo",
    price: 1300,
    image: "https://res.cloudinary.com/deffewpuq/image/upload/v1759281265/fdbfd9b3251a5a94adb31c5f3a0d6caf10fae43b_pxi4v4.png",
  },
];

// ============== Screen 1 ==============
function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>
        A premium online store for sporter and their stylish choice
      </Text>

      <View style={styles.backgroundImage}>
      <Image
        source={{
          uri: "https://res.cloudinary.com/deffewpuq/image/upload/v1759279556/b657871f5c0d8c0f67fc78f523516fd7768fec28_wwq1zl.png",
        }}
        style={styles.bikeImage}
        resizeMode="contain"
      />
      </View>

      <Text style={styles.shopName}>POWER BIKE SHOP</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}


// ============== Screen 2 ==============
function Screen2({ navigation }) {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Screen3", { bike: item })}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardName}>{item.name}</Text>
      <Text style={styles.cardPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
      <Text style={styles.title}>The world's Best Bike</Text>

      {/* Bộ lọc */}
      <View style={styles.filterRow}>
        {["All", "Roadbike", "Mountain"].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.filterActive,
            ]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === filter && styles.filterTextActive,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Danh sách 2 cột */}
      <FlatList
        data={bikes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

// ============== Screen 3 ==============
function Screen3({ route }) {
  const { bike } = route.params;
  return (
    <View style={styles.container}>
      <View style ={styles.backgroundDetailImage}>
      <Image source={{ uri: bike.image }} style={styles.detailImage} />
    </View>
      <Text style={styles.detailName}>{bike.name}</Text>
      <Text style={styles.detailPrice}>${bike.price}</Text>
       <Text style={styles.description}>Description</Text>
      <Text style={styles.detailDesc}>
       It is a very important form of writing as we write almost
        everything in paragraphs, be it an answer, essay, story, emails, etc.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

// ============== App ==============
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ============== Styles ==============
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    marginTop: 50
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  filterButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  filterActive: {
    backgroundColor: "#f24e1e20",
    borderColor: "#f24e1e",
  },
  filterText: {
    fontSize: 14,
    color: "#666",
  },
  filterTextActive: {
    color: "#f24e1e",
    fontWeight: "bold",
  },
  backgroundImage: {
    backgroundColor: "rgba(233, 65, 65, 0.1)",
    borderRadius: 50,
    width: 280,
    marginTop: 20,
    height: 300,
  },
  textHeader: {
    textAlign: "center",
    fontFamily: "VT323",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 30,
    paddingHorizontal: 12,
  },
  bikeImage: {
    width: 240,
    height: 240,
    marginTop: 50,
    marginLeft: 18
  },
  shopName: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    marginLeft: 50,
    marginRight: 50,

    color: "#000",
  },
  button: {
    backgroundColor: "#e63946",
    paddingVertical: 12,
    marginTop: 50,
    paddingHorizontal: 100,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "rgba(233, 65, 65, 0.1)",
    padding: 10,
    marginVertical: 8,
    alignItems: "center",
    borderRadius: 10,
    width: 180,
    height: 180,

  },
  cardImage: {
    width: 120,
    height: 110,
  },
  cardName: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 1)",
  },
    backgroundDetailImage: {
    backgroundColor: "rgba(233, 65, 65, 0.1)",
    width: "100%",
    height: 200
  },
  detailImage: {
    width: 200,
    height: 180,
    marginTop: 10,
    marginLeft: 30
  },
  description: {
    fontSize: 24,
    fontWeight: "bold",
  },
  detailName: {
    fontSize: 24,
    fontWeight: "bold"
  },
  detailPrice: {
    fontSize: 20,
    color: "#e63946",
    marginVertical: 10,
  },
  detailDesc: {
    textAlign: "center",
    marginHorizontal: 20,
    fontSize: 14,
    marginBottom: 20,
  },
});
