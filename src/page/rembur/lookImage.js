/**
 * Created by zdsoft on 2017/6/15.
 */
import React from 'react';
import {
    View,
    Modal
} from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';
import TitleBar from "../titleBar"
let leftIcon = require("../../resources/images/home/back_black.png");

export default class extends React.Component {
    doBack() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop()
        }
    }
    render() {
        return (
            <View style={{position:"absolute",flex:1}}>
                <TitleBar
                    centerTitle="图片查看"
                    leftIcon={leftIcon}
                    leftonPress={this.doBack.bind(this)}
                />
                <Modal visible={true} transparent={true}>
                    <ImageViewer imageUrls={this.props.lookImage}/>
                </Modal>
            </View>
        )
    }
}