import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, Dimensions, StatusBar, Platform, Keyboard, } from 'react-native';
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
import { useNewpassword } from '../../apollo/mutations';
import ToastMessage from '../../component/ToastMessage/ToastMessage';
import { CommonActions } from '@react-navigation/native';
import Spinner from '../../component/Spinner/Spinner';
import ErrorMessage from '../../component/ErrorMessage/ErrorMessage';
import i18n from 'i18n-js';


export default function CreatePassword(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]

    const [newPass, setNewPass] = useState('')
    const [newPassError, setnewPassError] = useState(false)

    const [ConfirmNewPass, setConfirmNewPass] = useState('')
    const [ConfirmNewPassError, setConfirmNewPassError] = useState(false)

    const [loading , setLoading ] = useState(false)

    const { mutate } = useNewpassword({
        onCompleted : () => {
            props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{name: 'Auth'}],
                })
            );
            ToastMessage({
                msg : 'success',
                header : "Success",
                description : "New password successfully updated"
            })
        },
        onError : (error) => {
            ErrorMessage(error)
        }
    })
    
    function validate(){
        let status = true

        newPass
        newPassError
        ConfirmNewPass
        ConfirmNewPassError

        if(newPass === ""){
            setnewPassError(true)
            status = true
        }
        if(ConfirmNewPass === ""){
            setConfirmNewPassError(true)
            status = true

        }
        else if(ConfirmNewPass !== newPass){
            setConfirmNewPassError(true)
            status = true
        }

        return status
    }

    const [eye, setEye] = useState("eye-slash");
    function onChangeIconConfirm() {
        if (eye === "eye") {
            setEye("eye-slash");
        } else {
            setEye("eye");
        }
    }

    const [eyeConfirm, setEyeConfirm] = useState("eye-slash");
    function onChangeEyeIconConfirm() {
        if (eyeConfirm === "eye") {
            setEyeConfirm("eye-slash");
        } else {
            setEyeConfirm("eye");
        }
    }


  return (
    
        <View style={[styles().flex, styles().ph30, {backgroundColor:currentTheme.black}]}>
            {loading && <Spinner />}
           <SafeAreaView style={[styles().flex, {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, 
    }]}>
            <View style={styles().flex}>
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
                        <Text style={[styles().fs14, styles().fontRegular, styles().textCenter, {color:currentTheme.BBBBBB}]}>{i18n.t("Please enter a new Password for your account")}</Text>
                    </View>

                <View style={styles().mb15}>
                    <TextField
                    value={newPass}
                    // label="Email/Phone"
                    label="New Password"
                    errorText={newPassError}
                    autoCapitalize="none"
                    style
                    onChangeText={(text) => {
                        setnewPassError(false);
                        setNewPass(text);
                    }}
                    secureTextEntry={eye === "eye" ? false : true}
                    childrenPassword={
                        <TouchableOpacity
                        onPress={onChangeIconConfirm.bind()}
                        style={[styles().passEye]}
                        >
                        <FontAwesome
                            name={eye}
                            size={16}
                            color={currentTheme.black}
                        />
                        </TouchableOpacity>
                    }
                    />
                </View>

                <View style={styles().mb15}>
                    <TextField
                    value={ConfirmNewPass}
                    // label="Email/Phone"
                    label="Confirm Password"
                    errorText={ConfirmNewPassError}
                    autoCapitalize="none"
                    style
                    onChangeText={(text) => {
                        setConfirmNewPassError(false);
                        setConfirmNewPass(text);
                    }}
                    secureTextEntry={eyeConfirm === "eye" ? false : true}
                    childrenPassword={
                        <TouchableOpacity
                        onPress={onChangeEyeIconConfirm.bind()}
                        style={[styles().passEye]}
                        >
                        <FontAwesome
                            name={eyeConfirm}
                            size={16}
                            color={currentTheme.black}
                        />
                        </TouchableOpacity>
                    }
                    />
                </View>
               
                
                <View style={styles().mt25}>
                <ThemeButton
                    Title={"Continue"}
                    Style={styles().br5}
                    onPress={()=>{
                        setLoading(true)
                        Keyboard.dismiss()
                        if(validate()){
                            mutate({
                                variables : {
                                    email : props.route.params.email,
                                    newPassword : newPass
                                }
                            })
                        }
                        else{
                            setLoading(false)
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