import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookDonate from '../screens/donateScreen'
import BookRequest from '../screens/requestScreen'

export const TabNavigator =  createBottomTabNavigator({
    donateScreen:{screen: BookDonate},
    requestScreen:{screen:BookRequest}
})