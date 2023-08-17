import { View, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "@ui-kitten/components";
import React from "react";

import { theme } from "../../theme";
import { HEADERHEIGHT } from "../../constants";

const Header = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme["color-primary-100"],
        paddingVertical: 45,
        paddingTop: HEADERHEIGHT + 15,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Avatar
            size="large"
            source={{
              uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            }}
          />
          <View style={{ paddingLeft: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Welcome Tega
            </Text>
            <Text style={{ color: "gray" }}>
              There's a lot of good left to do...
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 14,
            borderRadius: 50,
            position: "relative",
          }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
          <View
            style={{
              backgroundColor: theme["color-primary-500"],
              width: 8,
              height: 8,
              borderRadius: 50,
              position: "absolute",
              top: 12,
              left: 45,
            }}
          ></View>
        </View>
      </View>
      <View
        style={{ backgroundColor: "white", borderRadius: 10, marginTop: 40 }}
      >
        <TextInput
          placeholder="Search campaign"
          style={{
            backgroundColor: "white",
            width: "100%",
            padding: 15,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
};

export default Header;
