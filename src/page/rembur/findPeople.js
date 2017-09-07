import React from 'react';
import {
    View,
    TextInput,
    Text,
    Button
} from 'react-native';

import TitleBar from "../titleBar"
let leftIcon = require("../../resources/images/home/back_black.png");

export default class extends React.Component {

    constructor(props){
        super(props)
    }
    doBack() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop()
        }
    }
    doSearch(){

    }
    render() {
        return (
            <View style={styles.main}>
                <TitleBar
                    centerTitle="选择服务商家"
                    leftIcon={leftIcon}
                    leftonPress={this.doBack.bind(this)}
                />
                <View style={styles.sreachView}>
                    <TextInput style={styles.sreachInput} underlineColorAndroid="transparent" placeholder="请输入商家电话号码" />
                    <Button style={styles.sreachButton} title="搜索" onPress={this.doSearch.bind(this)}/>
                </View>
            </View>
        )
    }
}

const styles = {
    main : {
        flex : 1 ,
        backgroundColor : "#efeff4"
    },
    sreachView : {
        width : "100%",
        height : 50 ,
        backgroundColor: "#CCCCCC",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal : 15
    },
    sreachButton : {
        width:80,
        height:40 ,
        borderColor : "#0078E6" ,
        borderWidth:1 ,
        borderRadius : 10
    },
    sreachInput : {
        flex:1 ,
        padding:0 ,
        borderColor : "#4e4e4e" ,
        borderWidth:1 ,
        paddingLeft:10,
        marginRight : 15 ,
        backgroundColor:"white"
    }
}