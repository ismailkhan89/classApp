import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Dimensions, StatusBar, Platform, } from 'react-native';
import styles from '../styles';
import ThemeContext from '../../context/ThemeContext/ThemeContext'
import { theme } from '../../context/ThemeContext/ThemeColor'
import Layout from '../../component/Layout/Layout';
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
import ThemeButton from '../../component/ThemeButton/ThemeButton';
const {width, height} = Dimensions.get('window');

export default function DevoDetails(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]

    const item = props.route.params

    const [devoType, setDevoType] = useState('Written')
    const [devoTopics, setDevoTopics] = useState(false)
    
    return (
        <Layout navigation={props.navigation} BellIcon={true} LeftIcon={true} ContentContainer={styles().ph0}>
            <View style={[styles().flex, styles().mt20, styles().ph20]}>
                <View style={[styles().w130px, styles().h200px, styles().alignSelfCenter, styles().overflowH, styles().br10]}>
                    <Image source={require('../../assets/images/devo-detail-img.jpg')} style={styles().wh100} resizeMode="cover" />
                </View>

                <View style={[styles().alignCenter, styles().mt25]}>
                    <Text style={[styles().fs20, styles().mb10, styles().fw600, {color:currentTheme.white}]}>The Awe of God</Text>
                    <Text style={[styles().fs12, styles().lh18, styles().mb5, styles().textCenter, styles().fw400, {color:currentTheme.white}]}>Lorem ipsum dolor sit amet, consetetur {'\n'} sadipscing elitr.</Text>
                    <Text style={[styles().fs12, styles().mb25, styles().fw600, {color:currentTheme.white}]}>By John Bevere</Text>
                    <Text style={[styles().fs14, styles().fw600, {color:currentTheme.white}]}>No. of days - 6 days</Text>
                    <Text style={[styles().fs14, styles().mb25, styles().fw600, {color:currentTheme.white}]}>Price - $35</Text>
                    <ThemeButton Title={'Buy Now'} Style={[styles().br10, styles().w200px]} />
                </View>

                <View style={[styles().mt25, styles().mb20]}>
                    <Text style={[styles().fs15, styles().mb10, styles().fontRegular, {color:currentTheme.whitish}]}>Type of Devo</Text>
                    <View style={[styles().flexRow, styles().alignCenter, styles().justifyStart]}>
                        <ThemeButton onPress={()=> setDevoType('Written')} Title={'Written'} Style={[styles().h35px, styles().mr15, {backgroundColor:devoType === 'Written' ? currentTheme.themeBackground : 'transparent'}]}/>
                        <ThemeButton onPress={()=> setDevoType('Music')} Title={'Music'} Style={[styles().mr15, styles().h35px, {backgroundColor:devoType === 'Music' ? currentTheme.themeBackground : 'transparent'}]} />
                        <ThemeButton onPress={()=> setDevoType('Video')} Title={'Video'} Style={[styles().h35px, {backgroundColor:devoType === 'Video' ? currentTheme.themeBackground : 'transparent'}]} />
                    </View>
                </View>

                <View style={[styles().mb20]}>
                    <Text style={[styles().fs15, styles().mb10, styles().fontRegular, {color:currentTheme.whitish}]}>Topics of Devo</Text>
                    <View style={[styles().flexRow, styles().alignCenter, styles().justifyStart]}>
                        <ThemeButton onPress={()=> setDevoTopics(true)} Title={'Teaching'} Style={[styles().h35px, styles().mr15, {backgroundColor:devoTopics? currentTheme.themeBackground : 'transparent'}]} />
                        <ThemeButton onPress={()=> setDevoTopics(false)} Title={'Missions'} Style={[styles().mr15, styles().h35px, {backgroundColor:devoTopics === false ? currentTheme.themeBackground : 'transparent'}]} />
                    </View>
                </View>

                <View style={[styles().mb20]}>
                    <Text style={[styles().fs15, styles().mb10, styles().fontRegular, {color:currentTheme.whitish}]}>Summary</Text>
                    <Text style={[styles().fs12, styles().mb10, styles().fontRegular, {color:currentTheme.white}]}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</Text>
                </View>

                <View style={[styles().mb20]}>
                    <Text style={[styles().fs15, styles().mb10, styles().fontRegular, {color:currentTheme.whitish}]}>Product Details</Text>
                    <Text style={[styles().fs12, styles().mb5, styles().fontRegular, {color:currentTheme.white}]}>Release Date: Oct 16, 2022</Text>
                    <Text style={[styles().fs12, styles().mb5, styles().fontRegular, {color:currentTheme.white}]}>Publisher: Lorem Ipsum</Text>
                    <Text style={[styles().fs12, styles().mb10, styles().fontRegular, {color:currentTheme.white}]}>Copyright Info: Lorem Ipsum</Text>
                </View>
                
            </View>
            
    
    </Layout>
           
  );
}