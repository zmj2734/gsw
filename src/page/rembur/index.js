import React from "react"
import {
    ScrollView ,
    View,
    Image,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Switch
} from "react-native"

import TitleBar from "../titleBar"

let defaultImage = require("../../resources/images/bus_info/icon-img-fp.png");


export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            fp: defaultImage ,
            switchflag : false
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

    onValueChange(value){
        this.setState({
            switchflag : value
        })
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#C9C9C9"}}>
                <TitleBar
                    centerTitle="我的报账"
                    leftTitle="＜"
                    leftonPress={this.doBack.bind(this)}
                />
                <ScrollView style={styles.main}>
                    <View style={styles.title}>
                        <Text>
                            请上传发票
                        </Text>
                    </View>
                    <View style={styles.imageView}>
                        <TouchableOpacity activeOpacity = {1}>
                            <Image source={this.state.fp} style={styles.img}/>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.inputView}>
                        <Text style={{color:"black"}}>
                            发票金额(元)
                        </Text>
                        <TextInput keyboardType="numeric" placeholder="请输入发票金额" style={styles.input}
                                   underlineColorAndroid = "transparent" maxLength={10} />
                    </View>

                    <View style = {styles.inputView}>
                        <Text style={{color:"black"}}>
                            本次报账金额(元)
                        </Text>
                        <TextInput keyboardType="numeric" placeholder="请输入本次报账金额" style={styles.input}
                                   underlineColorAndroid  = "transparent" maxLength={10} />
                    </View>
                    <Text style= { { paddingLeft:15,paddingVertical:3}}>
                        报账金额只能是100的整数倍
                    </Text>
                    <View style={[styles.inputView,styles.switch]}>
                        <Text style={{color:"black"}}>
                            你没有可使用的消费券
                        </Text>
                        <Switch onValueChange={this.onValueChange.bind(this)} value={this.state.switchflag}/>
                    </View>
                    <View >
                        <Text style= { { paddingLeft:15,paddingVertical:3}}>
                            点击查看
                        </Text>

                    </View>
                </ScrollView>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: 5
    },
    title: {
        paddingLeft: 15,
        height: 40,
        justifyContent: "center" ,
        backgroundColor:"white"
    },
    imageView: {
        height: 200,
        alignItems : "center" ,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "#9E9E9E",
        borderBottomColor: "#9E9E9E",
        backgroundColor:"white"

    },
    img: {
        flex : 1 ,
        resizeMode: "contain",
    } ,
    inputView : {
        marginTop : 5 ,
        paddingLeft: 15,
        height: 40,
        alignItems: "center",
        flexDirection : "row",
        backgroundColor:"white"
    },
    input : {
        padding:0,
        flex : 1,
        marginLeft: 10
    },
    switch : {
        flexDirection:"row",
        justifyContent:"space-between",
        paddingRight:10
    }
})