import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar, StyleSheet } from "react-native";
import React from "react";
import DonationCardInfo from "../components/DonationCardInfo";
import { theme } from "../../theme";
import IconBadge from "../components/IconBadge";
import { Feather } from "@expo/vector-icons";

const DonationScreen = ({ route, navigation }: any) => {
  const goBack = () => {
    navigation.goBack();
  };
  const { item } = route.params;

  return (
    <View style={{flex: 1, paddingTop: StatusBar.currentHeight}}>
      <Image
        style={{ width: "100%", height: "35%" }}
        source={{
          uri: item.donationImage,
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: "absolute",
          top: 55,
          left: 20,
        }}
      >
        <IconBadge iconName="arrow-back-sharp" onPressFunction={goBack} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: "absolute",
          top: 55,
          right: 20,
        }}
      >
        <IconBadge iconName="bookmark-outline" onPressFunction={goBack} />
      </TouchableOpacity>
      <DonationCardInfo item={item} />
      <Text style={{ paddingHorizontal: 10, paddingVertical: 15, fontSize: 20 }}>
        About this project
      </Text>
      <ScrollView style={{}}>
        <Text style={{paddingHorizontal: 10, paddingVertical: 20, fontSize: 17}}>
           {item.description}
        </Text>
        <Text style={{ paddingHorizontal: 10, paddingVertical: 15, fontSize: 20 }}>Problem Statement</Text>
        <Text style={{paddingHorizontal: 10, paddingVertical: 20, fontSize: 17}}>{item.issue}</Text>

        <Text style={{ paddingHorizontal: 10, paddingVertical: 15, fontSize: 20 }}>Objectives</Text>
        <Text style={{paddingHorizontal: 10, paddingVertical: 20, fontSize: 17}}>{item.objective}</Text>
      </ScrollView>
      <View style={{marginVertical: 50}}>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          position: "absolute",
          bottom: 10,
          zIndex: 4,
          backgroundColor: theme["color-gray"],
          width: "100%",
          height: "10%",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
          style={{
            alignSelf: "center",
            backgroundColor: theme["color-primary-500"],
            padding: 14,
            borderRadius: 15,
          }}
        >
          <Feather name="message-circle" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            alignSelf: "center",
            backgroundColor: theme["color-primary-500"],
            width: "80%",
            alignItems: "center",
            paddingVertical: 20,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
            }}
          >
            Contribute
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default DonationScreen;
