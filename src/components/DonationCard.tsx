import { View, TouchableWithoutFeedback } from "react-native";
import React, { memo } from "react";
import { theme } from "../../theme";
import { donationType } from "../../types/donationTypes";
import DonationImage from "./DonationImage";
import DonationCardInfo from "./DonationCardInfo";

const DonationCard = ({
  item,
  navigation,
}: {
  item: donationType;
  navigation: any;
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Donation", { item: item })}
    >
      <View
        style={{
          marginHorizontal: 10,
          width: 350,
          height: 340,
          backgroundColor: theme["color-gray"],
          borderRadius: 10,
        }}
      >
        <DonationImage image={item.donationImage} />
        <DonationCardInfo item={item} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(DonationCard);
