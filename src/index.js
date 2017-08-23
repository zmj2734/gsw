import React from "react"
import {
    View
} from "react-native"
//import Root from "./newRoot"
import Root from "./root"

export default class extends React.Component{
    render(){
        return (
            <View style={{flex:1}}>
                <Root/>
            </View>
        )
    }
}