import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {TabNavigator} from './tabNavigator'
import CustomSideBarMenu from './customSideBar'
export const AppDrawer = createDrawerNavigator(
    {Home:{
        screen:TabNavigator
    }},
    {
        contentComponent:CustomSideBarMenu
    },
    {initialRouteName:'Home'}
)