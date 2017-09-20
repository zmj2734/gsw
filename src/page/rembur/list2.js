import React from "react"
import {
    View,
    Text,
    Image,
    ActivityIndicator,
    InteractionManager
} from "react-native"
import List from "../../common/listView"

let icon = require("../../resources/images/acount/is_group.png")

export default class extends React.Component{
    static navigationOptions = {
        tabBarLabel: '排队中',
    };
    constructor() {
        super();
        this.data = {
            code: 0,
            data: [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
            ]
        } ;
        this.state = {
            modalVisible: false,
            loadVisible : true,
            listView : null ,
        } ;
    }
    componentDidMount(){
        InteractionManager.runAfterInteractions(()=>{
            this.setState({
                loadVisible : false ,
                listView : this.createListView()
            })
        })
    }

    initView(){
        return(
            <View style={{flex:1}}>
                <ActivityIndicator style={{flex:1}} />
            </View>
        )
    }

    createListView(){
        return (
            <List
                renderItem={this.renderItem.bind(this)} data={this.data}
            />
        )
    }

    renderItem(data){
        return (
            <View style={{backgroundColor:"#eee"}}>
                <View style={{margin: 10,backgroundColor:"white"}}>
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
                        <View style={{paddingLeft: 12, paddingRight: 10,marginBottom:5}}>
                            <Text style={{fontSize: 12,marginBottom:2}}>报账总金额：<Text style={{color: "red"}}>100.00元</Text></Text>
                            <Text style={{fontSize: 12,marginBottom:2}}>需要使用消费劵：<Text style={{color: "red"}}>1</Text> 张</Text>
                            <Text style={{fontSize: 12,marginBottom:2}}>已出账金额：<Text style={{color: "red"}}>20.00元</Text></Text>
                        </View>
                    </View>
                </View>
                <Image style={{width:80,height:80,position:"absolute",right:10,top:35}} source={icon}/>
            </View>
        )
    }

    render(){
        return(
            <View style={{flex:1}}>
                {this.state.loadVisible ?
                    <View style={{flex: 1}}><ActivityIndicator style={{flex: 1}} size="large"
                                                               animating={this.state.loadVisible}/></View>
                    :
                    this.state.listView
                }
            </View>
        )
    }
}