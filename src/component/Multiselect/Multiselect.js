import React ,{ useContext } from 'react'
import {View , Text, TouchableOpacity,  Image , StatusBar, ScrollView, SafeAreaView  } from 'react-native'
import ThemeContext from '../../context/ThemeContext/ThemeContext'
import { theme } from '../../context/ThemeContext/ThemeColor'
import styles from '../../screens/styles'
import { Entypo , Foundation, Feather, Octicons, MaterialIcons, AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Header from '../Header/Header';
import { LinearGradient } from 'expo-linear-gradient';
import fontStyles from "../../utils/fonts/fontStyles";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';



export default function Multiselect({
    value, setValue, ListItems, SelectText, stylesWrapper, HeadingText
}){

    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]
   
    return (
        <View>
            {HeadingText && <Text style={[styles().fs14, styles().posAbs, styles().top10, styles().left15, styles().zIndex1, styles().fw400, {color:currentTheme.blackish}]}>{HeadingText}</Text> }
        <SectionedMultiSelect
        styles={{
            button: {
                backgroundColor: currentTheme.themeBackground,
            },
            modalWrapper: {
                justifyContent: 'center',
            },
            container: {
                flex: 0.25,
            },
            selectToggle: [
                {
                    paddingTop: HeadingText ? 30 : 10,
                    paddingBottom:10,
                    backgroundColor:currentTheme.BBBBBB,
                    borderRadius:5,
                    paddingLeft:15,
                    alignItems:'center',
                    alignContent:'center',
                    alignSelf:'center',
                    justifyContent:'center',
                    height: HeadingText ? 65 : 40,
                    // borderWidth:2
                    
                },
                stylesWrapper
            ],
            selectToggleText: {
                fontFamily: fontStyles.PoppinsRegular,
                fontSize: 16,
                fontWeight:HeadingText ? 'bold' : 'regular',
                color:HeadingText ? currentTheme.black : currentTheme.blackish,
                // borderWidth:2,
                height:'100%',
            },
            itemText: {
                paddingTop: 10,
                fontSize: 14,
                fontWeight: "400",
                fontFamily: fontStyles.PoppinsRegular,
            },
        }}
        showCancelButton={true}
        hideSearch={true}
        items={ListItems}
        selectToggleIconComponent={<View><FontAwesome name="angle-down" size={24} color={HeadingText ? currentTheme.newBlack : currentTheme.BBBBBB} style={{position:'absolute', top:-20, right:10}} /></View>}
        IconRenderer={MaterialIcons}
        uniqueKey="_id"
        displayKey='name'
        // subKey="children"
        single={true}
        selectText={SelectText}
        showDropDowns={true}
        readOnlyHeadings={false}
        onSelectedItemsChange={(item) =>
             setValue(item)}
        selectedItems={value}
    />
    </View>
    )
}