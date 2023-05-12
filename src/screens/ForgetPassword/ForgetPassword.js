import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, Dimensions, StatusBar, Platform, } from 'react-native';
import styles from '../styles';
import ThemeContext from '../../context/ThemeContext/ThemeContext'
import TextField from '../../component/FloatTextField/FloatTextField';
import { theme } from '../../context/ThemeContext/ThemeColor'
import ThemeButton from '../../component/ThemeButton/ThemeButton';
import {
    Ionicons,
    Foundation,
    FontAwesome5,
    Feather,
    Octicons,
    AntDesign,
    FontAwesome,
  } from "@expo/vector-icons";
import { useForgotPassword } from '../../apollo/mutations';
import Spinner from '../../component/Spinner/Spinner';
import ToastMessage from '../../component/ToastMessage/ToastMessage';
import ErrorMessage from '../../component/ErrorMessage/ErrorMessage';
import i18n from 'i18n-js';


export default function ForgetPassword(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]

    const [UserName, SetUserName] = useState('');
    const [UserError, setUserError] = useState(false)


    const { mutate , loading } = useForgotPassword({
        onCompleted :  onCompleted,
        onError : onError
    })

    async function onCompleted(data){
        try {
            ToastMessage({
                msg : 'success',
                header : "Success",
                description : "OTP send to your email address"
            })
            props.navigation.navigate('Verification',{email : UserName})
        }
        catch (e) {
            console.log(e)
        }
        finally {
        }
    }
  
    function onError(error){
        ErrorMessage(error)
    }


    
  return (
    <View style={[styles().flex, styles().ph30, {backgroundColor:currentTheme.black}]}>
        {loading && <Spinner />}
    <SafeAreaView style={[styles().flex, {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, 
    }]}>
        
        <View style={[styles().flex]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS ==='ios' ? 50 : 30}
                style={styles().flex}
            >
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={{flexGrow:1}}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()} style={[styles().wh40px, styles().alignCenter, styles().justifyCenter, styles().mt30, styles().br20, {backgroundColor:currentTheme.white30}]}>
                    <FontAwesome5 name="arrow-left" size={20} color={currentTheme.white} />
                </TouchableOpacity>
            <View style={[styles().flex, styles().justifyCenter]}>

            <View style={[styles().wh100px, styles().br40, styles().overflowH, styles().alignSelfCenter, styles().mb50]}>
                    <Image source={require('../../assets/images/logo.png')} style={styles().wh100} />
                </View>
                <View style={[styles().ph35, styles().alignCenter, styles().mb50]}>
                    <Text style={[styles().fs14, styles().fontRegular, styles().textCenter, {color:currentTheme.BBBBBB, color:currentTheme.white}]}>{i18n.t("Please enter the email address associated with your account")}</Text>
                </View>

                <View style={styles().mb15}>
                    <TextField
                    keyboardType="default"
                    value={UserName}
                    // label="Email/Phone"
                    label={"Email Address"}
                    errorText={UserError}
                    autoCapitalize="none"
                    style
                    onChangeText={(text) => {
                        setUserError(false);
                        SetUserName(text);
                    }}
                    
                    />
                </View>
               
                
                <View style={styles().mt25}>
                <ThemeButton
                    Title={"Continue"}
                    Style={styles().br5}
                    onPress={()=> {
                        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                        if(UserName !== "" && reg.test(UserName) === true){
                            mutate({
                                variables : {
                                    email : UserName
                                }
                            })
                        }
                        else{
                            setUserError(true)
                        }
                    }}
                />
                
            </View>

            
            </View>
            </ScrollView>
            
            
        </KeyboardAvoidingView>
        <View style={[styles().alignCenter, styles().mb20]}>
            <Text style={[styles().fs30, styles().textUpper, styles().fontBold, {color:currentTheme.white}]}>Resonate.</Text>
            <Text style={[styles().fs14, styles().textUpper, {color:currentTheme.white}]}>By Perspectives Worldwide</Text>
        </View>
    </View>
        
</SafeAreaView>
</View>
  );
}