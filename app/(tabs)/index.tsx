import { StyleSheet, TextInput } from "react-native";

import { View } from "@/components/Themed";
import FormChoice from "@/components/FormChoice";
import data from "@/data/datas.json";
import { Button, Chip, Text } from "react-native-paper";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  CocktailType,
  Cocktails,
  IngredientType,
  Ingredients,
} from "@/types/types";

export default function TabOneScreen() {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredients>([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const favorites = await AsyncStorage.getItem("favorites");
  //       console.log("favorites", favorites);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  // }, []);

  const [availableCocktails, setAvailableCocktails] = useState<Cocktails>([]);

  const handleAddIngredient = (ingredient: IngredientType) => {
    if (selectedIngredient.includes(ingredient)) {
      setSelectedIngredient(
        selectedIngredient.filter((item) => item !== ingredient)
      );
      return;
    }
    setSelectedIngredient([...selectedIngredient, ingredient]);
  };

  const handleSearchCocktail = () => {
    if (selectedIngredient.length === 0) return;
    // check if the ingredient is in the cocktail
    const ingredientIds = selectedIngredient.map((ingredient) => ingredient.id);
    const cocktails = data.cocktails.filter((cocktail) => {
      const cocktailsIngredientsIds = cocktail.ingredients.map(
        (ingredient) => ingredient.id
      );
      return ingredientIds.every((id) => cocktailsIngredientsIds.includes(id));
    });
    console.log(cocktails);

    setAvailableCocktails(cocktails);
  };

  const handleAddToFavorites = async (cocktail: CocktailType) => {
    // try {
    //   const favorites = (await AsyncStorage.getItem("favorites")) || [];
    //   const newFavorites = [...favorites, cocktail];
    //   await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <View style={styles.container}>
      {/* <FormChoice /> */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {data.ingredients.map((ingredient) => (
          <Chip
            key={ingredient.id}
            style={{ margin: 5 }}
            mode={selectedIngredient.includes(ingredient) ? "flat" : "outlined"}
            onPress={() => handleAddIngredient(ingredient)}
          >
            <Text>{ingredient.name}</Text>
          </Chip>
        ))}
      </View>

      <Button mode="contained" onPress={() => handleSearchCocktail()}>
        Rechercher un cocktail
      </Button>

      {availableCocktails &&
        availableCocktails.map((cocktail) => (
          <View key={cocktail.id}>
            <Text>{cocktail.name}</Text>
            <Text>{cocktail.description}</Text>
            <Button
              mode="contained"
              onPress={() => handleAddToFavorites(cocktail)}
            >
              Ajouter aux favoris
            </Button>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
