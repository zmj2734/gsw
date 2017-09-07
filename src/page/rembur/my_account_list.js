import React, {Component} from "react"
import {
    View,
    Text
} from "react-native"
import {TabNavigator} from "react-navigation"

import TitleBar from "../titleBar"
import NoChowLine from "./list1"
import ChowLine from "./list2"
import Completed from "./list3"
let leftIcon = require("../../resources/images/home/back_black.png") ;
const MyTabNavigator = TabNavigator(
    {
        NoChowLine: {screen: NoChowLine},
        ChowLine: {screen: ChowLine},
        Completed: {screen: Completed},
    }, {
        tabBarOptions: {
            initialRouteName: 'NoChowLine',
            swipeEnabled: "true",
            animationEnabled: "true",
            tabBarPosition: "top",
        }
    })

export default class extends Component {
    constructor() {
        super();
        this.state = {
            selectIndex : 1 ,
            leftStyle : styles.selected ,
            centerStyle : styles.centerHit ,
            rightStyle : styles.hit
        }
    }

    doBack() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop()
        }
    }

    reimbur() {

    }

    render() {
        return (
            <View style={styles.main}>
                <TitleBar
                    leftIcon = {leftIcon}
                    centerTitle="我的报账"
                    rightTitle="我要报账"
                    rightTitleStyle={styles.rightTitleStyle}
                    leftonPress={this.doBack.bind(this)}
                    rightonPress={this.reimbur.bind(this)}
                />
                <View style={[styles.main, {marginTop: 1, backgroundColor: "white"}]}>
                   <MyTabNavigator {...this.props}/>
                </View>
            </View>
        )
    }
}

let styles = {
    main: {
        flex: 1,
        backgroundColor: "#efeff4"
    },
    rightTitleStyle: {
        color: "#0197E1",
        fontSize: 12
    },
    hit: {
        flex: 1,
        height:"100%" ,
        justifyContent:"center",
        alignItems:"center" ,
        backgroundColor: "white",
        borderBottomWidth: 0.5,
        borderBottomColor: "#E6E6E6"
    },
    selected: {
        flex: 1,
        height:"100%" ,
        alignItems:"center" ,
        justifyContent:"center",
        backgroundColor: "#007aff",
        borderBottomWidth: 0.5,
        borderBottomColor: "#007aff",
        color: "white"
    },
    centerHit: {
        flex: 1,
        height:"100%" ,
        alignItems:"center" ,
        justifyContent:"center",
        backgroundColor: "white",
        borderBottomWidth: 0.5,
        borderBottomColor: "#E6E6E6",
        borderLeftWidth:0.5,
        borderLeftColor:"#E6E6E6",
        borderRightWidth:0.5 ,
        borderRightColor:"#E6E6E6"
    },
    centerSelected: {
        flex: 1,
        height:"100%" ,
        alignItems:"center" ,
        justifyContent:"center",
        backgroundColor: "#007aff",
        borderBottomWidth: 0.5,
        borderBottomColor: "#007aff",
        borderLeftWidth:0.5,
        borderLeftColor:"#007aff",
        borderRightWidth:0.5 ,
        borderRightColor:"#007aff",
        color: "white"
    }

}