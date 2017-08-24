import React from "react"
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform
} from "react-native"
import TitleBar from "../titleBar"
import Banner from '../../common/banner';
import ListView from "../../common/listView"

//工具类
import fetch from "../../common/util/fetch"

let qrcode = require("../../resources/images/home/qrcode.png");
let buy = require("../../resources/images/home/buy.png");
let bus_want = require("../../resources/images/home/bus_want.png");
let secode = require("../../resources/images/home/secode.png");
let acount_img = require("../../resources/images/home/acount_img.png");


export default class extends React.Component {

    /**
     * 初始化
     * @param props
     */
    constructor(props) {
        super(props);
        this.banners = [];
        this.iosMarginTop = Platform.OS == 'ios' ? {marginTop: 20} : {};

        //demo  banner图片地址
        this.banners = [
            {
                image: 'http://www.qq745.com/uploads/allimg/141106/1-141106153Q5.png',
            },
            {
                image: 'http://img1.3lian.com/2015/a1/53/d/200.jpg',
            },
            {
                image: 'http://img1.3lian.com/2015/a1/53/d/198.jpg',
            },
            {
                image: 'http://image.tianjimedia.com/uploadImages/2012/235/9J92Z5E5R868.jpg',
            },
        ];

        this.state = {
            listData: {
                code: 0,
                data: [
                    {a: "a"},
                    {a: "a"},
                    {a: "a"},
                    {a: "a"},
                    {a: "a"},
                    {a: "a"},
                    {a: "a"},
                    {a: "a"},
                    {a: "a"}
                ]
            }
        }
    }

    /**
     * 收益动态
     */
    renderItem(data) {
        return (
            <View style={styles.listItem}>
                <Image style={{
                    width: 14,
                    height: 14,
                    marginLeft :15 ,
                    resizeMode: "stretch"
                }}
                       source={require("../../resources/images/home/info_msg.png")}
                />
                <Text style={{ marginLeft : 10, fontSize : 12 }}>
                    {"8月24日"}
                </Text>
                <Text style={{ marginLeft : 10,fontSize : 12 ,color:"black"}}>
                    用户: {"136******781"}
                </Text>
                <Text style={{ marginLeft : 10,fontSize : 13 ,color:"red"}}>
                    出账金额{"20"}元
                </Text>
            </View>
        )
    }

    /**
     * 界面渲染
     * @returns {XML}
     */
    render() {
        return <View style={{flex: 1}}>
            <TitleBar
                centerTitle="共生网"
                style={styles.titleBar}
                titleStyle={styles.titleStyle}
            />
            <View style={styles.tools}>
                <View style={styles.tool}>
                    <Image style={styles.toolImage} source={qrcode}/>
                    <Text style={styles.toolText}>
                        扫一扫
                    </Text>
                </View>
                <View style={styles.toolLine}/>
                <View style={styles.tool}>
                    <Image style={styles.toolImage} source={buy}/>
                    <Text style={styles.toolText}>
                        购买消费券
                    </Text>
                </View>
                <View style={styles.toolLine}/>
                <View style={styles.tool}>
                    <Image style={styles.toolImage} source={bus_want}/>
                    <Text style={styles.toolText}>
                        我要报账
                    </Text>
                </View>
                <View style={styles.toolLine}/>
                <View style={styles.tool}>
                    <Image style={styles.toolImage} source={secode}/>
                    <Text style={styles.toolText}>
                        我的收款码
                    </Text>
                </View>
            </View>
            <View style={styles.acount}>
                <View style={styles.acount_view}>
                    <Image style={styles.acount_img} source={acount_img}/>
                    <Text style={styles.acount_text}>
                        我的报账
                    </Text>
                </View>
                <View style={styles.acount_line1}/>
                <View style={styles.acount_view2}>
                    <View style={styles.acount_view2_children}>
                        <Image style={styles.acount_img1} source={require("../../resources/images/home/nogroup.png")}/>
                        <Text style={styles.acount_text2}>
                            未排队
                        </Text>
                    </View>
                    <View style={[styles.acount_view2_children, {justifyContent: "flex-end"}]}>
                        <Text style={styles.acount_text2}>
                            0 张
                        </Text>
                        <Image style={styles.acount_img2} source={require("../../resources/images/default/right.png")}/>
                    </View>
                </View>
                <View style={styles.acount_view2}>
                    <View style={styles.acount_view2_children}>
                        <Image style={styles.acount_img1} source={require("../../resources/images/home/ingroup.png")}/>
                        <Text style={styles.acount_text2}>
                            排队中
                        </Text>
                    </View>
                    <View style={[styles.acount_view2_children, {justifyContent: "flex-end"}]}>
                        <Text style={styles.acount_text2}>
                            0 张
                        </Text>
                        <Image style={styles.acount_img2} source={require("../../resources/images/default/right.png")}/>
                    </View>
                </View>
                <View style={styles.acount_view2}>
                    <View style={styles.acount_view2_children}>
                        <Image style={styles.acount_img1} source={require("../../resources/images/home/finnish.png")}/>
                        <Text style={styles.acount_text2}>
                            已完成
                        </Text>
                    </View>
                    <View style={[styles.acount_view2_children, {justifyContent: "flex-end"}]}>
                        <Text style={styles.acount_text2}>
                            0 张
                        </Text>
                        <Image style={styles.acount_img2} source={require("../../resources/images/default/right.png")}/>
                    </View>
                </View>
            </View>
            <View style={styles.bannerView}>
                <View style={[styles.banner, this.iosMarginTop]}>
                    <Banner style={{flex: 1}}
                            banners={this.banners}
                    />
                </View>
            </View>
            <View style={styles.list}>
                <View style={[styles.acount_view, {borderBottomWidth: 0.5, borderBottomColor: "rgb(239,239,224)"}]}>
                    <Image style={styles.acount_img} source={require("../../resources/images/home/info.png")}/>
                    <Text style={styles.acount_text}>
                        收益动态
                    </Text>
                </View>
                <ListView data={this.state.listData} renderItem={this.renderItem.bind(this)} autoRun={true}/>
            </View>
        </View>
    }
}

let styles = StyleSheet.create({
    titleBar: {
        backgroundColor: "#5CC3FA"
    },
    titleStyle: {
        color: "white"
    },
    tools: {
        height: 100,
        width: "100%",
        backgroundColor: "#5CC3FA",
        flexDirection: "row",
        alignItems: "center"
    },
    tool: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    toolImage: {
        width: 30,
        height: 30
    },
    toolText: {
        marginTop: 10,
        color: "white"
    },
    toolLine: {
        width: 0.5,
        height: 43,
        marginBottom: 12,
        backgroundColor: "#E6E6E6"
    },
    acount: {
        backgroundColor: "rgb(239,239,224)"
    },
    acount_view: {
        paddingLeft: 2,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
        backgroundColor: "white",
        height: 40
    },
    acount_view2: {
        paddingLeft: 5,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        height: 40,
        justifyContent: "space-between"
    },
    acount_view2_children: {
        flexDirection: "row",
        width: "50%",
        alignItems: "center"
    },
    acount_img: {
        width: 12,
        height: 12,
        resizeMode: "stretch",
        marginLeft: 5
    },
    acount_img1: {
        width: 14,
        height: 14,
        resizeMode: "stretch",
        marginLeft: 5
    },
    acount_img2: {
        width: 8,
        height: 12,
        resizeMode: "stretch",
        marginLeft: 10,
        marginRight: 10
    },
    acount_text: {
        marginLeft: 5,
        color: "#5CC3FA"
    },
    acount_text2: {
        marginLeft: 5,
        color: "#4e4e4e"

    },
    acount_line1: {
        width: "100%",
        height: 0.5,
        backgroundColor: "rgb(239,239,224)"
    },
    acount_line2: {
        width: "100%",
        height: 0.3,
        backgroundColor: "rgb(239,239,224)"
    },
    bannerView: {
        height: 120,
        width: "100%",
        backgroundColor: "rgb(239,239,224)"
    },
    banner: {
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: "white"
    },
    list: {
        flex: 1
    },
    listItem: {
        flex: 1,
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        borderBottomWidth:1,
        borderBottomColor:"rgb(239,239,224)"
    },
})