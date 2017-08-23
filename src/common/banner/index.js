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

let onePage = require("../../resources/images/gruid/one.png");
let twoPage = require("../../resources/images/gruid/two.png");
let threePage = require("../../resources/images/gruid/three.png");

export default class extends React.Component {
    static defaultProps = {

    }

    static propTypes = {

    }

    constructor(props) {
        super(props)
    }

    componentWillUnmount(){

    }

    scrollToEnd() {

    }

    render() {
        let createThumbRow = (uri, i) => <Thumb {...this.props} key={i} uri={uri} index={i}/>;
        return (
            <View style={[bannerStyle.defaultStyle,this.props.style]}>
                <ScrollView
                    style={{flex: 1}}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    scrollToEnd={
                        this.scrollToEnd.bind(this)
                    }
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
    onPress(){

    }
    render() {
        return (
            <TouchableOpacity onPress={this.onPress.bind(this)} activeOpacity={1}>
                <Image style={{
                    resizeMode: "stretch",
                    flex: 1,
                    width: "100%",
                    height: "100%"
                }}
                       resizeMode="stretch"
                       source={this.props.uri}/>
            </TouchableOpacity>
        );
    }
}

let bannerStyle = StyleSheet.create({
    defaultStyle : {
        width:"100%",
        height:120,
        backgroundColor : "white"
    }
})
