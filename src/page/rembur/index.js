import React from "react"
import {
    ScrollView,
    View,
    Image,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Switch,
    InteractionManager
} from "react-native"

import TitleBar from "../titleBar"
import Button from "../../common/button"
import ImagePicker from "react-native-image-picker"
import MyAccountList from "./my_account_list"

let leftIcon = require("../../resources/images/home/back_black.png");
let defaultImage = require("../../resources/images/bus_info/icon-img-fp.png");


export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            fp: defaultImage,
            switchflag: false
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

    async selectImage() {
        const options = {};
        const _this = this;
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.uri) {
                let source = {uri: response.uri, width: response.width, height: response.height};
                _this.setState({
                    fp: source
                });
            }
        })
    }

    submit() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'myAccountList',
                component: MyAccountList,
                params : {
                    selectedIndex : 0
                }
            })
        }
    }

    onValueChange(value) {
        this.setState({
            switchflag: value
        })
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#efeff4"}}>
                <TitleBar
                    centerTitle="我的报账"
                    leftIcon={leftIcon}
                    leftonPress={this.doBack.bind(this)}
                />
                <ScrollView style={styles.main}>
                    <View style={styles.title}>
                        <Text style={{color: "black"}}>
                            请上传发票
                        </Text>
                    </View>
                    <View style={styles.imageView}>
                        <TouchableOpacity activeOpacity={1} onPress={this.selectImage.bind(this)}>
                            <Image source={this.state.fp} style={styles.img}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={{color: "black"}}>
                            发票金额(元)
                        </Text>
                        <TextInput keyboardType="numeric" placeholder="请输入发票金额" style={styles.input}
                                   underlineColorAndroid="transparent" maxLength={10}/>
                    </View>

                    <View style={styles.inputView}>
                        <Text style={{color: "black"}}>
                            本次报账金额(元)
                        </Text>
                        <TextInput keyboardType="numeric" placeholder="请输入本次报账金额" style={styles.input}
                                   underlineColorAndroid="transparent" maxLength={10}/>
                    </View>
                    <Text style={{paddingLeft: 15, paddingVertical: 5, marginTop: 3}}>
                        报账金额只能是100的整数倍
                    </Text>
                    <View style={[styles.inputView, styles.switch]}>
                        <Text style={{color: "black"}}>
                            可使用消费劵5张
                        </Text>
                        <Switch onValueChange={this.onValueChange.bind(this)} value={this.state.switchflag}/>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={{paddingLeft: 15, paddingVertical: 5, marginTop: 3}}>
                            点击查看
                        </Text>
                        <TouchableOpacity>
                            <Text style={{color: "#0078E6", paddingVertical: 5, marginTop: 3}}>
                                《共生网平台消费赠送与消费补贴规则》
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <Text style={{paddingLeft: 15, paddingVertical: 3, color: "red"}}>
                            温馨提示：
                        </Text>
                        <Text style={{paddingLeft: 3, paddingVertical: 3}}>
                            报账审核时间为工作日9:00 －18:00
                        </Text>
                    </View>
                    <View style={{height: 40, alignItems: "center", marginTop: 10, marginHorizontal: 10}}>
                        <Button title="下一步" onSubmit={this.submit.bind(this)}/>
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
        justifyContent: "center",
        backgroundColor: "white"
    },
    imageView: {
        height: 200,
        alignItems: "center",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "#9E9E9E",
        borderBottomColor: "#9E9E9E",
        backgroundColor: "white"

    },
    img: {
        flex: 1,
        resizeMode: "contain",
    },
    inputView: {
        marginTop: 5,
        paddingLeft: 15,
        height: 40,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "white"
    },
    input: {
        padding: 0,
        flex: 1,
        marginLeft: 10
    },
    switch: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 10
    }
})