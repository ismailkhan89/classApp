import React, {useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { tabIcon, tabOptions } from "./customTab";
import CustomTabs from "../component/CustomTab/CustomTab";
import ThemeContext from "../context/ThemeContext/ThemeContext";
import { theme } from "../context/ThemeContext/ThemeColor";

import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';
import ForgetPassword from '../screens/ForgetPassword/ForgetPassword';
import Verification from '../screens/Verification/Verification';
import CreatePassword from '../screens/CreatePassword/CreatePassword';
import Notifications from '../screens/Notifications/Notifications';

import Home from '../screens/Home/Home';
import Tabbar_testing from '../screens/Home/tabbar_testing';

import Devotionals from '../screens/Devotionals/Devotionals';

import Music from '../screens/Music/Music';

import NotesList from '../screens/NotesList/NotesList';
import ReadNotes from '../screens/ReadNotes/ReadNotes';
import SongNotes from '../screens/SongNotes/SongNotes';
import NotesSingle from '../screens/NotesSingle/NotesSingle';
import DevoDetails from '../screens/DevoDetails/DevoDetails';

import More from '../screens/More/More';
import AccountSettings from '../screens/AccountSettings/AccountSettings';
import Language from '../screens/Language/Language';
import CustomTabsNotes from '../component/CustomTab/CustomTabNotes';
import { AuthContext } from '../context/Auth/auth';
import { UserProvider } from '../context/User/User';
import ChangePassword from '../screens/ChangePassword/ChangePassword';


const Stack = createNativeStackNavigator();
const NavigationStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const SideDrawer = createNativeStackNavigator();
const DevosStack = createNativeStackNavigator();
const MusicStack= createNativeStackNavigator();
const NotesStack = createNativeStackNavigator();
const MoreStack = createNativeStackNavigator();


function Authscreens(props){
    return(
        <AuthStack.Navigator  screenOptions={{headerShown:false}}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="ForgetPassword"component={ForgetPassword} />
            <AuthStack.Screen name="Verification" component={Verification} />
            <AuthStack.Screen name="CreatePassword" component={CreatePassword} />
            <AuthStack.Screen name="Signup" component={Signup} />
        </AuthStack.Navigator>
    )
}

function HomeScreens(props){
  return(
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Notifications" component={Notifications} />
        <HomeStack.Screen name="tabbar_testing" component={Tabbar_testing} />
    </HomeStack.Navigator>
  )
}

function DevosNavigator(){
  return(
    <DevosStack.Navigator screenOptions={{headerShown:false}}>
      <DevosStack.Screen name='Devotionals' component={Devotionals} />
      <DevosStack.Screen name="DevoDetails" component={DevoDetails} />
      <DevosStack.Screen name="Notifications 2" component={Notifications} />
    </DevosStack.Navigator>
  )
}

function MusicNavigator(){
  return(
    <MusicStack.Navigator screenOptions={{headerShown:false}}>
      <MusicStack.Screen name="Music" component={Music} />
      <MusicStack.Screen name="Notifications 3" component={Notifications} />
    </MusicStack.Navigator>
  )
}

function NotesNavigator(){
  return(
    <NotesStack.Navigator screenOptions={{headerShown:false}}>
      <NotesStack.Screen name="NotesList" component={NotesList} />
      <NotesStack.Screen name="ReadNotes" component={ReadNotes} />
      <NotesStack.Screen name="SongNotes" component={SongNotes} />
      <NotesStack.Screen name="Notifications 4" component={Notifications} />
      
    </NotesStack.Navigator>
  )
}

function MoreNavigator(){
  return(
    <MoreStack.Navigator screenOptions={{headerShown:false}}>
      <MoreStack.Screen name="More" component={More} />
      <MoreStack.Screen name="AccountSettings" component={AccountSettings} />
      <MoreStack.Screen name="Language" component={Language} />
      <MoreStack.Screen name="Notifications 5" component={Notifications} />
      <MoreStack.Screen name="ChangePassword" component={ChangePassword} />

    </MoreStack.Navigator>
  )
}

function Drawer() {
  return (
    
      <View style={{ flex: 1, }}>
        <SideDrawer.Navigator
          screenOptions={{
            swipeEnabled:false,
            headerShown:false
          }}
          
          drawerContent={(props) => {
          }}
        >
          <SideDrawer.Screen name="Home">
            {(props) => <MyTabs {...props} />}
          </SideDrawer.Screen>
        </SideDrawer.Navigator>
      </View>
    
  );
}


function MyTabs(props) {
  const themeContext = useContext(ThemeContext);
  const currentTheme = theme[themeContext.ThemeValue];
  return (
    <View
      style={StyleSheet.flatten([
        {
          flex: 1,
        },
        props.style,
      ])}
    >
      <Tab.Navigator
        tabBar={(props) => <CustomTabs {...props} />}
        screenOptions={({ route }) => tabIcon(route, currentTheme)}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreens}
          options={{ title: "Home", headerShown:false }}
        />
        <Tab.Screen
          name="Devos"
          component={DevosNavigator}
          options={{ title: "Devos", headerShown:false }}
        />
        <Tab.Screen
          name="Music"
          component={MusicNavigator}
          options={{ title: "Music", headerShown:false }}
        />
        
        <Tab.Screen
          name="NotesList"
          component={NotesTabs}
          options={{ title: "Notes", headerShown:false }}
        />
        <Tab.Screen
          name="More"
          component={MoreNavigator}
          options={{ title: "More", headerShown:false }}
        />
      </Tab.Navigator>
    </View>
  );
}

function NotesTabs(props) {
  const themeContext = useContext(ThemeContext);
  const currentTheme = theme[themeContext.ThemeValue];
  return (
    <View
      style={StyleSheet.flatten([
        {
          flex: 1,
        },
        props.style,
      ])}
    >
      <Tab.Navigator
        tabBar={(props) => <CustomTabsNotes {...props} />}
        screenOptions={({ route }) => tabIcon(route, currentTheme)}
      >
        <Tab.Screen
          name="NotesList"
          component={NotesList}
          options={{  title: "Read", headerShown:false }}
        />
        <Tab.Screen
          name="Read"
          component={ReadNotes}
          options={{ title: "Read", headerShown:false }}
        />
        <Tab.Screen
          name="Songs"
          component={SongNotes}
          options={{ title: "Songs", headerShown:false }}
        />
        <Tab.Screen
          name="Notes"
          component={NotesSingle}
          options={{ title: "Notes", headerShown:false }}
        />
      </Tab.Navigator>
    </View>
  );
}

function NoDrawer(){
  return(
    <UserProvider>
      <NavigationStack.Navigator screenOptions={{headerShown:false}}>
        <NavigationStack.Screen name="Drawer" component={Drawer} />
      </NavigationStack.Navigator>
    </UserProvider>
  )
}

function AppContainer() {
  const { token } = useContext(AuthContext)


  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{ headerShown: false}}
      initialRouteName={token ? 'noDrawer' : 'Auth'}
      >
        <Stack.Screen name="Auth" component={Authscreens} />
        <Stack.Screen name="noDrawer" component={NoDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;