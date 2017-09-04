import React from "react"
import {
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native"

import Login from "../page/login"

let onePage = require("../resources/images/gruid/one.png");
let twoPage = require("../resources/images/gruid/two.png");
let threePage = require("../resources/images/gruid/three.png");
let botton = require("../resources/images/gruid/botton.png");

let THUMBS = [onePage, twoPage, threePage];
export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let createThumbRow = (uri, i) => <Thumb {...this.props} key={i} uri={uri} index={i}/>;
        return (
            <View style={{flex: 1}}>
                <ScrollView
                    style={{flex: 1}}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {THUMBS.map(createThumbRow)}
                </ScrollView>
            </View>
        )
    }
}

class Thumb extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    toHome(){
        //老版本路由
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'login',
                component: Login,
            })
        }
    }
    render() {
        if (this.props.index == THUMBS.length - 1) {
            return (<View style={{
                flex: 1,
            }}>
                <Image style={{
                    resizeMode: "stretch",
                    flex: 1,
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height
                }}
                       resizeMode="stretch"
                       source={this.props.uri}/>
                <TouchableOpacity  onPress={this.toHome.bind(this)} activeOpacity= {1}
                                   style={{
                                        flex: 1,
                                        position: "absolute",
                                        bottom: 0,
                                        width: "100%",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                >
                    <Image source={botton}
                           style={{
                               resizeMode: "contain",
                               //position: "absolute",
                               bottom: "10%",
                               width: "70%"
                           }}
                    />
                </TouchableOpacity >
            </View>)
        }
        return (
            <Image style={{
                resizeMode: "stretch",
                flex: 1,
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height
            }}
                   resizeMode="stretch"
                   source={this.props.uri}/>
        );
    }
}
