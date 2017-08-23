import React from "react"
import {
    View
} from "react-native"
import { Navigator } from 'react-native-deprecated-custom-components'
import Start from "./start"
export default class extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Navigator
                    initialRoute={{name: "start", component: Start}}
                    configureScene={(route) => {
                        return Navigator.SceneConfigs.FloatFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator}/>
                    }}/>
            </View>
        )
    }
}