import { StyleSheet, View, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../theme";

import Header from "../components/Header";
import Categories from "../components/Categories";
import Donations from "../components/Donations";

const HomeScreen = ({ navigation }: any) => {
  const Navigation = useNavigation();

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: "white",
          display: "flex",
          paddingVertical: 20,
        }}
      >
        <Categories />
        <Donations navigation={navigation} title="Urgent Causes" />
        <Donations navigation={navigation} title={"Popular Projects"} />
        <View style={{ height: 50 }}></View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: theme["color-primary-500"],
  },
});
