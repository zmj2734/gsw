import React from "react"
import {
    View
} from "react-native"
import { StackNavigator } from 'react-navigation'
import Start from "./start"
import Home from "./start/home"

let AppNavigator = StackNavigator({
        Index: {screen: Start},
        Home : {screen:Home}
    },
    {
        initialRouteName: 'Index',
        headerMode: 'none',
        navigationOptions: {
            cardStack: {
                gesturesEnabled: true
            }
        },
        mode: 'card',
    }
) ;


export default class extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <AppNavigator />
            </View>
        )
    }
}