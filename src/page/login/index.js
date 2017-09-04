import React from "react"
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native"
import TitleBar from "../titleBar"
import CheckBox from "react-native-checkbox"
import Button from "../../common/button"
import Home from "../home"
import Agree from "./agree"

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isChecked : false
        }
    }
    isChecked(checked){
        this.setState({
            isChecked : !this.state.isChecked
        })
    }
    readProtocol(){
       const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'agree',
                component: Agree,
            })
        }

        //新版本路由
        /*const { navigate } = this.props.navigation;
        navigate("Agree")*/
    }
    login(){
        const {navigator} = this.props;
        if (navigator) {
            navigator.resetTo({
                name: 'home',
                component: Home,
            })
        }

        //新版本路由
        /*const { navigate } = this.props.navigation;
        navigate("Home")*/
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#C9C9C9"}}>
                <TitleBar
                    centerTitle="登陆"
                />
                <View style={{flex:1,marginTop:5,backgroundColor:"white",alignItems:"center"}}>
                    <View style={{width: "100%", height: 60,marginLeft:20,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <TextInput style={{width:150}} underlineColorAndroid="transparent" placeholder="请输入手机号" maxLength={11}/>
                    </View>
                    <View style={{width:"90%",height:1,backgroundColor:"#C9C9C9"}}/>
                    <View style={{width: "100%", height: 60,marginLeft:20,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <TextInput style={{width:150}} underlineColorAndroid="transparent" placeholder="请输入验证码" maxLength={8}/>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Text style={{color:"#0098E4" ,borderColor:"#0098E4",borderRadius : 3,
                                borderWidth:1,height:28,width:90,marginRight:30,textAlign:"center",paddingTop:4}}>
                                发送验证码
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:"90%",height:1,backgroundColor:"#e2e2e2"}}/>
                    <View style={{flexDirection:"row",height:40,alignItems:"center",justifyContent:"flex-start"}}>
                        <CheckBox checked={this.state.isChecked}
                                  onChange={this.isChecked.bind(this)}
                                  checkboxStyle = {{width:15,height:15,resizeMode: "stretch",marginTop:5}}
                                  containerStyle = {{paddingHorizontal:1,marginHorizontal:1}}
                                  label=""/>
                        <Text style={{marginLeft:-15}}>
                            请阅读并勾选
                        </Text>
                        <TouchableOpacity activeOpacity={0.8} onPress = {this.readProtocol.bind(this)}>
                            <Text style={{color:"#0078E6"}}>
                                《共生网消费者注册协议》
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",height:40,alignItems:"center",width:"90%"}}>
                        <Button title="登陆" onSubmit={this.login.bind(this)}/>
                    </View>
                </View>
            </View>
        )
    }
}