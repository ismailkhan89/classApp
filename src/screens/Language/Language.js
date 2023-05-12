import React, {useContext, useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Dimensions, StatusBar, Platform, } from 'react-native';
import styles from '../styles';
import ThemeContext from '../../context/ThemeContext/ThemeContext'
import { theme } from '../../context/ThemeContext/ThemeColor'
import Layout from '../../component/Layout/Layout';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18n-js';

const {width, height} = Dimensions.get('window');

export default function Notifications(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]

    const [language, setLanguage] = useState('')
    
    const NotificationsList = [
        {
            id:0,
            title:'English',
            short : 'en'
            },
        {
            id:1,
            title:'Albanian',
            short : ''
        },
        {
            id:2,
            title:'Amharic',
            short : ''

        },
        {
            id:3,
            title:'Arabic',
            short : 'ar'
        },
        {
            id:4,
            title:'Armenian',
            short : ''

        },
        {
            id:5,
            title:'Basque',
            short : ''

        },
        {
            id:6,
            title:'Bengali',
            short : ''

        },
        {
            id:7,
            title:'Byelorussian',
            short : ''

        },
        {
            id:8,
            title:'Burmese',
            short : ''

        },
        {
            id:9,
            title:'Bulgarian',
            short : ''

        },
        {
            id:10,
            title:'Catalan',
            short : ''

        },
        {
            id:11,
            title:'Czech',
            short : ''
        },
        {
            id:12,
            title:'Chinese',
            short : ''

        },
        {
            id:13,
            title:'Croatian',
            short : ''
        },
        {
            id:14,
            title:'Danish',
            short : ''
        },
        {
            id:15,
            title:'Dari',
            short : ''
        },
        {
            id:16,
            title:'Dzonghka',
            short : ''
        },
        {
            id:17,
            title:'Dutch',
            short : ''
        }
    ]

    useEffect(() => {
        (async () => {
            const resp = await AsyncStorage.getItem('resonate-language');
            var result = NotificationsList.find(d => d.short === resp)
            setLanguage(result?.id)
        })();
    }, []);
    return (
        <Layout navigation={props.navigation} 
         LeftIcon={true} PageTitle={'Notifications'} withoutScroll={true}
          ContentContainer={styles().ph0}
          >
            
            <View style={[styles().flex, styles().mt20, styles().ph20]}>
                <FlatList
                    data={NotificationsList}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                onPress={()=> {
                                    setLanguage(item.id);
                                    AsyncStorage.setItem('resonate-language', item.short)
                                    i18n.locale = item.short;
                                    themeContext.updateLang(item.short)
                                    //props.navigation.navigate('More')
                                    // setTimeout(() => {
                                    //     props.navigation.navigate('More')
                                    //   }, 1000)
                                    
                                }}
                                style={[
                                    styles().flexRow,
                                    styles().mb10,
                                    styles().justifyBetween,
                                    styles().pb10,
                                    {borderBottomColor:currentTheme.SliderDots, borderBottomWidth:1,}
                                    // styles().alignCenter,
                                ]}>              
                                
                                    <Text style={[styles().fs16, styles().fontRegular, {color:currentTheme.white}]}>{item.title}</Text>
                                {language === item.id && <FontAwesome name="check" size={20} color={currentTheme.themeBackground} />}
                                
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            
    
    </Layout>
           
  );
}