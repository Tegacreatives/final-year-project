import { View, FlatList } from "react-native";

import { donationData } from "../../data/donations";
import DonationCard from "./DonationCard";
import SectionTitle from "./SectionTitle";

const Donations = ({ navigation, title }: any) => {
  const moveToScreen = () => navigation.navigate("List");
  return (
    <View>
      <SectionTitle title={title} moveToScreen={moveToScreen} />
      <FlatList
        style={{
          paddingLeft: 6,
        }}
        horizontal
        initialNumToRender={4}
        showsHorizontalScrollIndicator={false}
        data={donationData}
        renderItem={({ item }) => (
          <DonationCard item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Donations;
