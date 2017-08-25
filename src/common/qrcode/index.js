import React from "react"
import {
    View,
    Text,
    TouchableOpacity
} from "react-native"

import Styles from "./index.css"
import ImageButton from "./imageButton"

let back = require("../../resources/images/qrcode/qqback.png");
let lightOn = require("../../resources/images/qrcode/qrcodeLigthOn.png");

import {QRScannerView} from 'ac-qrcode';
import ImagePicker from "react-native-image-picker"

export default class extends React.Component {

    constructor(){
        super()
        this.state = {
            imageUri : "",
            camera : null
        }
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:"white"}} >
            < QRScannerView
                ref = {(qr) => this.qrscanner = qr}
                onScanResultReceived
                    ={this.barcodeReceived.bind(this)}
                renderTopBarView
                    ={() => this._renderTitleBar()}
                renderBottomMenuView
                    ={() => this._renderMenu()}
            />
            </View>
        )
    }

    _renderTitleBar() {
        return (
            <View style={Styles.view_title_container}>
                <ImageButton
                    onPress={this.back.bind(this)}
                    source={back}
                    style={{height: 32, width: 32, resizeMode: 'contain', marginLeft: 16}}
                />
                <Text
                    style={{color: "white", fontSize: 18, marginLeft: 30}}
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
        this.getCamera() ;
        const options = {} ;
        const _this = this ;
        ImagePicker.launchImageLibrary(options,(response) => {
            if(response.uri){
                _this.setState({
                    imageUri : response.uri
                }) ;
                _this.state.camera.capture({metadata: options})
                    .then((data) => console.log(data))
                    .catch(err => console.error(err));
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