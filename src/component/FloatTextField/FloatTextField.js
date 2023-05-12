import React, { useEffect, useRef, useState, useContext } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  useColorScheme
} from "react-native";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import { theme } from "../../context/ThemeContext/ThemeColor";
import Styles from "../../screens/styles";
import i18n from 'i18n-js';

const TextField = (props) => {
  const {
    label,
    errorText,
    value,
    style,
    onBlur,
    onFocus,
    stylesInput,
    childrenPassword,
    editable,
    ...restOfProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);
  const focusAnim = useRef(new Animated.Value(0)).current;

  const themeContext = useContext(ThemeContext);
  const currentTheme = theme[themeContext.ThemeValue];

  const colorScheme = useColorScheme();

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value]);

  let color = isFocused ? currentTheme.blackish : currentTheme.blackish;
  if (errorText) {
    color = "#B00020";
  }

  return (
    <View style={[style]}>
      {/* <Text style={{ position: "absolute", top: 20, left: 10 }}>+</Text> */}
      <TextInput
        returnKeyType="done"
        style={[
          Styles().h65px,
          Styles().justifyCenter,
          Styles().alignCenter,
          Styles().pt15,
          Styles().fs14,
          Styles().br5,
          Styles().ph20,
          // Styles().bw1,
          {
            // borderColor: currentTheme.black,
            color: currentTheme.black,
            backgroundColor:  currentTheme.BBBBBB,
          },
          stylesInput,
        ]}
        editable={editable}
        placeholderTextColor={currentTheme.black}
        ref={inputRef}
        {...restOfProps}
        value={value}
        onBlur={(event) => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        onFocus={(event) => {
          setIsFocused(true);
          onFocus?.(event);
        }}
      />
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.View
          style={[
            styles.labelContainer,
            // isFocused && { backgroundColor : 'white' },
            {
              transform: [
                {
                  scale: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1,1],
                    // outputRange: [1, 1],
                  }),
                },
                {
                  translateY: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [24, 12],
                  }),
                },
                {
                  translateX: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [16, 20],
                  }),
                },
              ],
            },
          ]}
        >
          <Text
            style={[
              styles.label,
              {
                color,
              },
              isFocused && {
                fontSize : 14
              }
            ]}
          >
            {i18n.t(label)}
            {errorText ? "*" : ""}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      {childrenPassword}
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // padding: 18,
    // height : 50,
    // justifyContent :'center',
    // alignContent :'center',
    // borderRadius: 4,
    fontSize: 14,
    // borderBottomWidth : 1
  },
  labelContainer: {
    position: "absolute",
    top: -5,
    // paddingHorizontal: 10,
  },
  label: {
    // fontSize: 16,
    fontSize: 14,
  },
  error: {
    // marginTop: 4,
    marginLeft: 12,
    fontSize: 12,
    color: "#B00020",
  },
});

export default TextField;
