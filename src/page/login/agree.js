import React from "react"
import {
    View ,
    Text ,
    ScrollView
} from "react-native"
import TitleBar from "../titleBar"
import WebView from "../../common/webView"
export default class extends React.Component{
    back(){
        const {navigator} = this.props;
        if(navigator){
            navigator.pop()
        }
    }
    render(){
        return (
            <View  style={{flex:1,backgroundColor:"white"}}>
                <TitleBar
                    leftTitle="＜"
                    centerTitle="协议"
                    leftonPress = {this.back.bind(this)}
                />
                <WebView url={}/>
            </View>
        )
    }
}
