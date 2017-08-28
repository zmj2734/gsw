import React from "react"
import {
    View,
    StyleSheet,
    Image
} from "react-native"

import TitleBar from "../titleBar"

let defaultCode = require("../../resources/images/mine/myqrcode.png");


export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            qrcode: defaultCode
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
                    centerTitle="我的收款码"
                    leftTitle="＜"
                    leftonPress={this.doBack.bind(this)}
                />
                <View style={styles.main}>
                    <View style={styles.codeView}>
                        <Image style={styles.codeImage} source={this.state.qrcode}/>
                    </View>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    titleBar: {
        backgroundColor: "#5CC3FA"
    },
    titleStyle: {
        color: "white"
    },
    main: {
        backgroundColor: "#5CC3FA",
        flex: 1,
        justifyContent: "center",
        alignItems: "center" ,
    },
    codeView: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center" ,
        width: 280,
        height: 280,
        borderRadius: 10
    },
    codeImage: {
        width: 230,
        height: 230,
        resizeMode:"stretch"
    }
})