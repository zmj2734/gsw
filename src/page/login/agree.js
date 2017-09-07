import React from "react"
import {
    View ,
    Text ,
    ScrollView,
    WebView
} from "react-native"
import TitleBar from "../titleBar"
let leftIcon = require("../../resources/images/home/back_black.png")
export default class extends React.Component{
    back(){
        const {navigator} = this.props;
        if(navigator){
            navigator.pop()
        }
    }
    render(){
        return (
            <View  style={{flex:1,backgroundColor:"#C9C9C9"}}>
                <TitleBar
                    leftIcon={leftIcon}
                    centerTitle="协议"
                    leftonPress = {this.back.bind(this)}
                />
                <WebView source= {require("../html/login_agree.html")} style={{flex:1,marginTop:0.5}}/>
            </View>
        )
    }
}
