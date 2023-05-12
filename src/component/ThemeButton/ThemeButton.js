import React, { useContext } from "react";
import {Text, TouchableOpacity, useColorScheme } from "react-native";
import ThemeContext from "../../context/ThemeContext/ThemeContext";
import { theme } from "../../context/ThemeContext/ThemeColor";
import styles from "../../screens/styles";
import i18n from 'i18n-js';

export default function ThemeButton({
  onPress,
  Title,
  Style,
  StyleText,
  withoutBg,
 
}) {
  const themeContext = useContext(ThemeContext);
  const currentTheme = theme[themeContext.ThemeValue];
  const colorScheme = useColorScheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles(currentTheme).justifyCenter,
        styles(currentTheme).alignCenter,
        styles().h50px,
        styles().overflowH,
        styles().ph25,
        styles().br50,
        styles().bw1,
        {backgroundColor : withoutBg ? currentTheme.cE5E5E5 : currentTheme.themeColor,
          borderColor:withoutBg ? currentTheme.cE5E5E5 : currentTheme.themeColor },
        Style,
      ]}
    >
      <Text
          style={[
            { color: withoutBg ? currentTheme.borderColor : currentTheme.white },
            styles(currentTheme).fs15,
            styles().fw600,
            styles().fontSemiBold,
            StyleText,
          ]}
        >
          {i18n.t(Title)}
        </Text>
    </TouchableOpacity>
  );
}
