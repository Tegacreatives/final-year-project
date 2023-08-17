import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconBadge = ({
  iconName,
  onPressFunction,
}: {
  iconName: any;
  onPressFunction: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      activeOpacity={1}
      style={{
        backgroundColor: "white",
        padding: 14,
        borderRadius: 50,
        width: 50,
      }}
    >
      <View>
        <Ionicons name={iconName} size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default IconBadge;
