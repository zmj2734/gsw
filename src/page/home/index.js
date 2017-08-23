import React from "react"
import {
    View,
    Text,
    Image ,
    StyleSheet
} from "react-native"

import TabNavigator from 'react-native-tab-navigator';
import IndexView from "../Index"
import MerchantView from "../merchant"
import MessageView from "../message"
import MeView from "../me"

let home = require("../../resources/images/tabNav/no_home.png") ;
let home_selected = require("../../resources/images/tabNav/check_home.png") ;

let merchant = require("../../resources/images/tabNav/shop.png") ;
let merchant_selected = require("../../resources/images/tabNav/ck_shop.png") ;

let message = require("../../resources/images/tabNav/msg.png") ;
let message_selected = require("../../resources/images/tabNav/ck_msg.png") ;

let mine = require("../../resources/images/tabNav/my.png") ;
let mine_selected = require("../../resources/images/tabNav/ck_my.png") ;

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedTab : "index"
        }
    }
    render(){
        return (
            <View style={{flex:1,backgroundColor:"white"}}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === "index"}
                        title="首页"
                        renderIcon={() => <Image source={home}  style={styles.image}/>}
                        renderSelectedIcon={() => <Image source={home_selected} style={styles.image} />}
                        onPress={() => this.setState({ selectedTab: "index" })}>
                        <IndexView/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === "merchant"}
                        title="商家"
                        renderIcon={() => <Image source={merchant} style={styles.image}/>}
                        renderSelectedIcon={() => <Image source={merchant_selected} style={styles.image}/>}
                        //renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: "merchant" })}>
                        <MerchantView/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === "message"}
                        title="消息"
                        renderIcon={() => <Image source={message} style={styles.image}/>}
                        renderSelectedIcon={() => <Image source={message_selected} style={styles.image}/>}
                        //renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: "message" })}>
                        <MessageView/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === "mine"}
                        title="我的"
                        renderIcon={() => <Image source={mine} style={styles.image}/>}
                        renderSelectedIcon={() => <Image source={mine_selected} style={styles.image}/>}
                        //renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: "mine" })}>
                       <MeView/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    image : {
        width : 22 ,
        height : 18 ,
        resizeMode: "stretch"
    }
})