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
import { useChangePassword, useNewpassword } from '../../apollo/mutations';
import ToastMessage from '../../component/ToastMessage/ToastMessage';
import { CommonActions } from '@react-navigation/native';
import Spinner from '../../component/Spinner/Spinner';
import ErrorMessage from '../../component/ErrorMessage/ErrorMessage';
import UserContext from '../../context/User/User';
import Layout from '../../component/Layout/Layout';
import i18n from 'i18n-js';


export default function ChangePassword(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]

    const user = useContext(UserContext)

    const [oldPass, setOldPass] = useState('')
    const [oldPassErr, setOldPassErr ] = useState(false)

    const [newPass, setNewPass] = useState('')
    const [newPassError, setnewPassError] = useState(false)

    const [ConfirmNewPass, setConfirmNewPass] = useState('')
    const [ConfirmNewPassError, setConfirmNewPassError] = useState(false)

    const [loading , setLoading ] = useState(false)

    const { mutate } = useChangePassword({
        onCompleted : () => {
            ToastMessage({
                msg : 'success',
                header : "Success",
                description : "Password successfully updated"
            })
            props.navigation.goBack()
        },
        onError : (error) => {
            ErrorMessage(error)
            setLoading(false)
        }
    })
    
    function validate(){
        let status = true

        if(oldPass === ""){
            setOldPassErr(true)
            status = false
        }
        if(newPass === ""){
            setnewPassError(true)
            status = false
        }
        if(ConfirmNewPass === ""){
            setConfirmNewPassError(true)
            status = false
        }
        else if(ConfirmNewPass !== newPass){
            setConfirmNewPassError(true)
            status = false
        }

        return status
    }
    const [eyeOld, setEyeOld ] = useState("eye-slash");
    function onChangeOldIconConfirm() {
        if (eyeOld === "eye") {
            setEyeOld("eye-slash");
        } else {
            setEyeOld("eye");
        }
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
    <Layout navigation={props.navigation} LeftIcon={true} PageTitle={i18n.t('Update Password')} withoutScroll={true} ContentContainer={styles().ph0}>
    
        <View style={[styles().flex, styles().ph30, {backgroundColor:currentTheme.black}]}>
            {loading && <Spinner />}
           <SafeAreaView style={[styles().flex, {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, 
    }]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS ==='ios' ? 50 : 50}
                
                style={styles().flex}
            >
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={{flexGrow:1}}>
                <View style={[styles().flex, styles().justifyCenter]}>
                <View style={styles().mb15}>
                    <TextField
                    value={oldPass}
                    // label="Email/Phone"
                    label="Old Password"
                    errorText={oldPassErr}
                    autoCapitalize="none"
                    style
                    onChangeText={(text) => {
                        setOldPassErr(false);
                        setOldPass(text);
                    }}
                    secureTextEntry={eyeOld === "eye" ? false : true}
                    childrenPassword={
                        <TouchableOpacity
                        onPress={onChangeOldIconConfirm.bind()}
                        style={[styles().passEye]}
                        >
                        <FontAwesome
                            name={eyeOld}
                            size={16}
                            color={currentTheme.black}
                        />
                        </TouchableOpacity>
                    }
                    />
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
                    label="Confirm New Password"
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
                    Title={"Update"}
                    Style={styles().br5}
                    onPress={()=>{
                        setLoading(true)
                        Keyboard.dismiss()
                        if(validate()){
                            mutate({
                                variables : {
                                    email : user.email,
                                    password : oldPass,
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
    
</SafeAreaView>
</View>
</Layout>
  );
}