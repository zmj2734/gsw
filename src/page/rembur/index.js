import React from "react"
import {
    View ,
    Image,
    Text,
    TextInput ,
    StyleSheet
} from "react-native"

import TitleBar from "../titleBar"

let defaultImage = require("../../resources/images/bus_info/icon-img-fp.png");


export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            fp: defaultImage
        }
    }

    componentDidMount() {

    }

    doBack() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop()
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TitleBar
                    centerTitle="我的报账"
                    leftTitle="＜"
                    leftonPress={this.doBack.bind(this)}
                />
                <View style={styles.main}>
                    <View style={styles.title}>
                        <Text >
                            请上传发票
                        </Text>
                    </View>
                    <View style = {styles.imageView}>
                        <Image source={this.state.fp} style = {styles.img} />
                    </View>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    main: {
        backgroundColor: "#5CC3FA",
        flex: 1,
    },
    title: {
        paddingLeft:15,
        flex : 1 ,
        height : 50
    },
    imageView : {
        flex : 1 ,
        height: 150 ,
        borderTopWidth : 1 ,
        borderBottomWidth :1 ,
        borderTopColor : "#9E9E9E" ,
        borderBottomColor : "#9E9E9E"

    },
    img : {
        resizeMode : "stretch" ,
        marginHorizontal: 30 ,
        marginVertical: 20
    }
})