import React from "react"
import {
    View,
    Text
} from "react-native"
import List from "../../common/listView"

export default class extends React.Component{
    static navigationOptions = {
        tabBarLabel: '已完成',
    };
    constructor(){
        super() ;
        this.data = {
            code : 0 ,
            data : [
                1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
            ]
        }
    }

    renderItem(data){
        return (
            <View>
                <Text>
                    fcccc
                </Text>
            </View>
        )
    }

    render(){
        return(
            <View style={{flex:1}}>
                <List
                    renderItem = {this.renderItem.bind(this)} data={this.data}
                />
            </View>
        )
    }
}