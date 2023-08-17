import { ApplicationProvider } from "@ui-kitten/components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as eva from "@eva-design/eva";

import Navigation from "./src/navigation/Navigation";
import { theme } from "./theme";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={theme}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ApplicationProvider>
  );
}
