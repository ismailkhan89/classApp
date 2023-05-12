import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Dimensions, StatusBar, Platform, useWindowDimensions } from 'react-native';
import styles from '../../screens/styles';
import ThemeContext from '../../context/ThemeContext/ThemeContext'
import { theme } from '../../context/ThemeContext/ThemeColor'
import {
    Ionicons,
    Foundation,
    FontAwesome5,
    Feather,
    Octicons,
    AntDesign,
    FontAwesome,
    MaterialIcons,
    MaterialCommunityIcons
  } from "@expo/vector-icons";
import Tooltip from 'react-native-walkthrough-tooltip';
const {width, height} = Dimensions.get('window');

export default function MusicComponent(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]

    const {item} = props;
    const [toolTipVisible, settoolTipVisible] = useState(false);

    return (
            <TouchableOpacity
                                style={[
                                    styles().br10, 
                                    styles().mb10,
                                    styles().pb10,
                                    styles().flexRow,
                                    styles().justifyBetween,
                                    styles().alignCenter,
                                    {borderBottomWidth:1, borderBottomColor:currentTheme.A5A5A5}
                                ]}>
                                <View style={[styles().wh50px, styles().overflowH, styles().br25]}>
                                    <Image source={item.image} style={styles().wh100} resizeMode="cover" />
                                </View>
                                <View style={[styles().flex, styles().ml15]}>
                                    <Text style={[styles().fs16, styles().fontRegular, {color:currentTheme.white}]}>{item.title}</Text>
                                    <Text style={[styles().fs11, styles().fontLight, {color:currentTheme.white}]}>{item.singer}</Text>
                                </View>
                                <Tooltip
                                    isVisible={toolTipVisible}
                                    content={
                                        <View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                settoolTipVisible(!toolTipVisible);
                                            }}
                                            style={[
                                            styles().pb10,
                                            styles().mb5,
                                            styles().alignCenter,
                                            styles().bbw1,
                                            {borderBottomColor: currentTheme.E6E6E6},
                                            ]}>
                                            <Text
                                            style={[
                                                styles().fs12,
                                                styles().fw400,
                                                {color: currentTheme.c737373},
                                            ]}>
                                            {'Transfer to Spotify'}
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => {
                                                settoolTipVisible(!toolTipVisible);
                                            }}
                                            style={[
                                           styles().mb0,
                                            styles().alignCenter,
                                            
                                            ]}>
                                            <Text
                                            style={[
                                                styles().fs12,
                                                styles().fw400,
                                                {color: currentTheme.c737373},
                                            ]}>
                                            {'Transfer to Apple Music'}
                                            </Text>
                                        </TouchableOpacity>
                                   </View>
                                    }
                                    contentStyle={[styles().h70px, styles().w200px]}
                                    placement="bottom"
                                    topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
                                    onClose={() => settoolTipVisible(!toolTipVisible)}>
                                    <TouchableOpacity
                                        onPress={() => {
                                        settoolTipVisible(!toolTipVisible);
                                        }}
                                        style={[styles().ph10]}
                                        >
                                        <FontAwesome
                                        name="ellipsis-v"
                                        size={20}
                                        color={currentTheme.SliderDots}
                                        />
                                    </TouchableOpacity>
                                    </Tooltip>
                            </TouchableOpacity>
                );
}