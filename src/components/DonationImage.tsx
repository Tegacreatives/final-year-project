import { View, Text, Image } from "react-native";
import React from "react";
import IconBadge from "./IconBadge";

const DonationImage = ({ image }: { image: string }) => {
  return (
    <View style={{ height: "50%" }}>
      <Image
        style={{
          height: "100%",
          width: "100%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        source={{
          uri: image,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        <IconBadge
          iconName="bookmark-outline"
          onPressFunction={() => console.log("bookmark")}
        />
      </View>
    </View>
  );
};

export default DonationImage;
