import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { categoriesData } from "../../data/categories";
import { theme } from "../../theme";

const Category = ({ name, icon }: { name: string; icon: string | any }) => (
  <TouchableOpacity
    style={{
      marginTop: 8,
      paddingLeft: 20,
    }}
  >
    <Text
      style={{
        paddingVertical: 13,
        paddingHorizontal: 15,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: theme["color-primary-400"],
        color: "white",
      }}
    >
      {name} {icon}
    </Text>
  </TouchableOpacity>
);

const Categories = () => {
  return (
    <FlatList
      style={{ marginRight: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categoriesData}
      renderItem={({ item }) => (
        <Category name={item.categoryName} icon={item.categoryIcon} />
      )}
      keyExtractor={(item) => item.categoryName}
    />
  );
};

export default Categories;
