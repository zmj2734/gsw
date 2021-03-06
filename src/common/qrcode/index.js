import React from "react"
import {
    View,
    Text,
    TouchableOpacity,
    InteractionManager,
    ActivityIndicator
} from "react-native"

import Styles from "./index.css"
import ImageButton from "./imageButton"
import {QRScannerView} from 'ac-qrcode';
import ImagePicker from "react-native-image-picker"

let back = require("../../resources/images/qrcode/wechatBack.png");
let lightOn = require("../../resources/images/qrcode/qrcodeLigthOn.png");

export default class extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            imageUri : null,
            camera : null,
            QRScannerView :null,
            loading : true
        }
    }

    componentDidMount(){
        InteractionManager.runAfterInteractions(()=>{
            this.setState({
                QRScannerView : this.createView(),
                loading : false
            })
        })
    }

    createView(){
        return(
            < QRScannerView
                ref = {(qr) => this.qrscanner = qr}
                onScanResultReceived
                    ={this.barcodeReceived.bind(this)}
                renderTopBarView
                    ={() => this._renderTitleBar()}
                renderBottomMenuView
                    ={() => this._renderMenu()}
            />
        )
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:"#eee"}} >
                {this.state.QRScannerView?
                    <ActivityIndicator size="large" animating={this.state.loading} />:
                      this.createView()
                }
            </View>
        )
    }

    _renderTitleBar() {
        return (
            <View style={Styles.view_title_container}>
                <ImageButton
                    onPress={this.back.bind(this)}
                    source={back}
                    style={{height: 32, width: 32, resizeMode: 'contain', marginHorizontal: 5}}
                />
                <Text
                    style={{color: "white", fontSize: 18, paddingLeft: 15,borderLeftWidth:1,borderLeftColor:"#c8c8c8"}}
                >二维码/条码</Text>
            </View>
        )
    }

    _renderMenu() {
        return (
            <View style={Styles.view_bottom_menu_container}>
                    <ImageButton onPress = {this.light.bind(this)}
                        style={Styles.image_qqbrowser_light}
                        source={lightOn}
                    />
                <TouchableOpacity activeOpacity ={1} onPress={this.album.bind(this)}>
                    <Text style={Styles.text_album}>相册</Text>
                </TouchableOpacity>
            </View>
        )
    }

    barcodeReceived(e) {
        const {navigator} = this.props;
        if(this.props.getUri){
            this.props.getUri(e)
        }
        if (navigator) {
            navigator.pop()
        }

    }

    /**
     * 返回
     */
    back(){
       const {navigator} = this.props;
        if (navigator) {
            navigator.pop()
        }

        /*const {goBack} = this.props.navigation;
        goBack(null)*/
    }

    /**
     * 相册
     */
    album(){
        const options = {} ;
        const _this = this ;
        ImagePicker.launchImageLibrary(options,(response) => {
            if(response.uri){
                _this.getCamera() ;
                _this.setState({
                    imageUri : response.uri
                }) ;
            }
        })
    }

    getCamera(camera){
        this.setState({
            camera : this.qrscanner.getCamera()
        })
    }

    /**
     * 亮度
     */
    light(){

    }
}