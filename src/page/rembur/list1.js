import React from "react"
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    InteractionManager
} from "react-native"
import List from "../../common/listView"
import Communications from 'react-native-communications'
import LookImage from "./lookImage"

let icon = require("../../resources/images/acount/no_group.png");
let modalCloseIcon = require("../../resources/images/profit/close-fp.png")

export default class extends React.Component {
    static navigationOptions = {
        tabBarLabel: '未排队',
    };

    constructor() {
        super();
        this.data = {
            code: 0,
            data: [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            ]
        };
        this.lookImage = [{url: "http://avatar.csdn.net/1/C/1/1_sinat_17775997.jpg"}];
        this.state = {
            modalVisible: false,
            loadVisible: true,
            onClosingState: false
        };
    }

    componentDidMount() {
        const _this = this;
        InteractionManager.runAfterInteractions(() => {
            _this.listView = this.createListView();
            _this.setState({
                loadVisible: false,
            })
        })
    }

    createListView() {
        return (
            <List
                renderItem={this.renderItem.bind(this)} data={this.data}
            />
        )
    }

    dial(phone) {
        Communications.phonecall(phone, true)
    }

    openModal() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'lookImage',
                component: LookImage,
                params: {
                    lookImage : this.lookImage
                }
            })
        }
    }

    modalClose() {
    }

    renderItem(data) {
        return (
            <View style={{backgroundColor: "#eee"}}>
                <View style={{margin: 10, backgroundColor: "white"}}>
                    <View style={{
                        backgroundColor: "#0098e6",
                        flexDirection: "row",
                        width: "100%",
                        height: 40,
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingLeft: 10,
                        paddingRight: 8
                    }}>
                        <Text style={{fontSize: 12, color: "white"}}>账单编号：sc20170821142613363</Text>
                        <Text style={{fontSize: 12, color: "white"}}>20元档</Text>
                    </View>
                    <View style={{backgroundColor: "white"}}>
                        <View style={{
                            flexDirection: "row",
                            width: "100%",
                            height: 30,
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingLeft: 12,
                            paddingRight: 10
                        }}>
                            <Text style={{fontSize: 14, fontWeight: "300", color: "black"}}>
                                报账详情
                            </Text>
                            <Text style={{fontSize: 12}}>
                                2017-08-10 14:10:01
                            </Text>
                        </View>
                        <View style={{paddingLeft: 12, paddingRight: 10, marginBottom: 5}}>
                            <Text style={{fontSize: 12, marginBottom: 2}}>报账总金额：<Text
                                style={{color: "red"}}>100.00元</Text></Text>
                            <Text style={{fontSize: 12, marginBottom: 2}}>需要使用消费劵：<Text style={{color: "red"}}>1</Text>
                                张</Text>
                            <Text style={{fontSize: 12, marginBottom: 2}}>代理商家：<Text
                                style={{color: "red"}}>重庆小淘淘户外用具店</Text></Text>
                            <Text style={{fontSize: 12, marginBottom: 2}}>代报账号：<Text
                                style={{color: "red"}}>15000000009</Text><Text
                                style={{fontSize: 13, color: "black", marginLeft: 10}}
                                onPress={this.dial.bind(this, "15000000009")}>
                                点击拨打</Text></Text>
                            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                                <Text style={{fontSize: 12, marginBottom: 2}}>等待处理</Text><Text
                                style={{color: "#0098E6"}} onPress={this.openModal.bind(this)}>发票</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Image style={{width: 80, height: 80, position: "absolute", right: 10, top: 35}} source={icon}/>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                {this.state.loadVisible ?
                    <View style={{flex: 1}}><ActivityIndicator style={{flex: 1}}
                                                               animating={this.state.loadVisible}/></View>
                    :
                    this.createListView()
                }
            </View>
        )
    }
}