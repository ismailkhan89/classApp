import React, { useContext } from "react";
import {
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  Feather,
  Ionicons,
  Entypo,
  Octicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import ThemeContext from "../../context/ThemeContext/ThemeContext";
import { theme } from "../../context/ThemeContext/ThemeColor";


import styless from "../../screens/styles";



const { width, height } = Dimensions.get("screen");

export default function CustomTabsNotes(props) {

  const themeContext = useContext(ThemeContext);
  const currentTheme = theme[themeContext.ThemeValue];

  

  const { state, descriptors, navigation, fill } = props;

  let routeName =
    props.state.routes[props.state.index]?.state?.routes[
      props?.state?.routes[props.state.index]?.state?.index
    ]?.name;
  // console.log("routeName", props.state.routes[props.state.index]);
  let parentName = props.state.routes[props.state.index]?.name;
  
  if(
    routeName === 'Notifications' ||
    routeName === 'AccountSettings' ||
    routeName === 'Language' ||
    routeName === 'NotesList'
  ){
    return null;
  }

  return (
    <View
      style={[
        styles(currentTheme).footerArea,
      ]}
    >
      {state.routes.length > 0 &&
        state.routes.map((d, index) => {
          // console.log(d.name)
          if(d.name === 'NotesList') return 
          let icon
          if(d.name === 'Read'){
            icon = <FontAwesome5 name="book-open" size={24} color={state.index === index ? currentTheme.white : currentTheme.SliderDots} />
          } else if (d.name === 'Songs'){
            icon = <MaterialIcons name="music-note" size={24} color={state.index === index ? currentTheme.white : currentTheme.SliderDots} />
          } else if(d.name ==='Notes'){
            icon = <MaterialIcons name="book" size={24} color={state.index === index ? currentTheme.white : currentTheme.SliderDots} />
          }
          

          return (
            <TouchableOpacity
              key={index}
              style={[styles(currentTheme).footer]}
              onPress={() => {
                navigation.navigate(d.name, { screen: d.name });
              }}
            >
              
              {icon}
              <Text style={[styless().fs12, styless().fontRegular, {color:state.index === index ? currentTheme.white : currentTheme.c868686}]}>{d.name}</Text>
              
            </TouchableOpacity>
          );
        })}
    </View>
  );
}

const styles = (props = null) =>
  StyleSheet.create({
    footerArea: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderTopWidth:1,
      borderTopColor:props!== null ? props.A5A5A5 : 'transparent',
      backgroundColor: props !== null ? props.black : "transparent",
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    footerText: {
      fontSize: 20,
      lineHeight: 24,
      color: "#FFFFFF",
      paddingHorizontal: 10,
    },
    footer: {
      justifyContent: "center",
      alignItems: "center",
    },
  });
