import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Keyboard,
  Image,
  TextInput,
  useWindowDimensions,
  Text,
} from "react-native";

const fakeKeyboardImg = require("./FakeKeyboard.png")

export function FakeWebExample() {
  const animation = useRef(new Animated.Value(0)).current;

  const animationHeight = 300

  const startAnimation = (toValue) =>
    Animated.timing(animation, { toValue, duration: 300 }).start();

    const offsetInterpolate = animation.interpolate({
        inputRange: [0, animationHeight],
        outputRange: [0, -animationHeight]
    })
    const scaleInterpolate = animation.interpolate({
        inputRange: [0, animationHeight],
        outputRange: [0, animationHeight]
    })

   const [focused, setFocused] = useState(false)
   const focus = () => setFocused(true)
   const blur = () => setFocused(false)

    useEffect(() => {
        if (focused) {
            startAnimation(animationHeight)
        } else {
            startAnimation(0)
        }
    }, [focused])


  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{translateY: offsetInterpolate}]  }}>
        <TextInput style={{width: 400, textAlign: "center"}} onFocus={focus} onBlur={blur} placeholder={"I'm an input low on the page"} />
      </Animated.View>
      <Animated.View style={{overflow: "hidden", height: scaleInterpolate, width: "100%", position: "absolute", bottom: 0, justifyContent: "center", alignItems: "center"}} >
            <Image style={{height: "100%", width: "100%"}} resizeMode={"cover"} source={fakeKeyboardImg}/>
            <Text style={{position: "absolute", backgroundColor: "black", color: "white", padding: 10}}>FAKE KEYBOARD FOR WEB</Text>
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
