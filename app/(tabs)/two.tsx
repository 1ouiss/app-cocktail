import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";

import data from "@/data/datas.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Cocktails } from "@/types/types";

export default function TabTwoScreen() {
  const [favoritesCocktails, setFavoritesCocktails] = useState<Cocktails>([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const favorites = await AsyncStorage.getItem("favorites");
  //       console.log("favorites", favorites);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     // const favorites = (AsyncStorage.getItem("favorites") || []).map((item) =>
  //     //   JSON.parse(item)
  //     // );

  //     // console.log("favorites", favorites);
  //   })();
  // }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
      {favoritesCocktails.map((cocktail, index) => (
        <Text key={index}>{cocktail.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
