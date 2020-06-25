import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Keyboard,
  TextInput,
} from "react-native";

export function MobileExample() {
  const keyboardOffset = useRef(new Animated.Value(0)).current;

  const startAnimation = (toValue) =>
    Animated.timing(keyboardOffset, { toValue, duration: 200 }).start();

  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", (e) => {
      startAnimation(-e.endCoordinates?.height);
    });
    Keyboard.addListener("keyboardWillHide", () => {
      startAnimation(0);
    });
    return () => {
      Keyboard.removeAllListeners("keyboardWillShow");
      Keyboard.removeAllListeners("keyboardWillHide");
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateY: keyboardOffset }] }}>
        <TextInput placeholder={"I'm an input low on the page"} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
