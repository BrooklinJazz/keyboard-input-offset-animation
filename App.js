import React from "react";
import { MobileExample } from "./MobileExample";
import { FakeWebExample } from "./FakeWebExample";
import { Platform, View, Text } from "react-native";
import Emoji from "react-native-emoji";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <Text style={{ textAlign: "center" }}>
          If you're on web, make sure you inspect the page and toggle the device
          toolbar to view the example like it's a mobile device otherwise it
          looks like <Emoji name="poop" />
          {"\n"}
          {"\n"}
          click on the input below to see the example!
          {"\n"}
          {"\n"}
          <AntDesign name="arrowdown" size={24} color="black" />
        </Text>
      </View>
      {Platform.select({
        web: <FakeWebExample />,
        default: <MobileExample />,
      })}
    </View>
  );
}
