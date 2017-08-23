/**
 * Created by zmj on 2017/3/14.
 */
import React from 'react';
import {
    WebView,
    View,
    TouchableWithoutFeedback,
    Text,
    ActivityIndicator,
    BackAndroid,
} from 'react-native';
import styles from "./index.css" ;
export default class webview extends React.Component {
    static defaultProps = {
        url: "https://www.baidu.com",
        dataDetectorTypes: "all",
        decelerationRate: "fast",
        scalesPageToFit: true,
        automaticallyAdjustContentInsets: true,
        startInLoadingState: true,
    }
    static propTypes = {
        /**
         *  传入的url路径
         */
        url: React.PropTypes.string,
        /**
         * (IOS)探测网页中某些特殊数据类型，自动生成可点击的链接，默认情况下仅允许探测电话号码。
         * 你可以指定探测下述类型中的一种，或者使用数组来指定多个类型。
         * dataDetectorTypes的可选值：
         *  'phoneNumber'
         *  'link'
         *  'address'
         *  'calendarEvent'
         *  'none'
         *  'all'
         */
        dataDetectorTypes: React.PropTypes.string,
        /**
         * (IOS)指定一个浮点数，用于设置在用户停止触摸之后，此视图应以多快的速度停止滚动。
         * 也可以指定预设的字符串值，如"normal"和"fast"，
         * 分别对应UIScrollViewDecelerationRateNormal 和UIScrollViewDecelerationRateFast。
         */
        decelerationRate: React.PropTypes.string,
        /**
         * 设置是否要把网页缩放到适应视图的大小，以及是否允许用户改变缩放比例
         */
        scalesPageToFit: React.PropTypes.bool,
        /**
         * 在使用Navigator的同时使用ListView或ScrollView，后两者的头部会多出一些空间,设置该属性为  false
         */
        automaticallyAdjustContentInsets: React.PropTypes.bool,
        /**
         * 强制WebView在第一次加载时先显示loading视图。默认为true。
         */
        startInLoadingState: React.PropTypes.bool,
        /**
         * 在webview内部的网页中调用window.postMessage方法时可以触发此属性对应的函数，从而实现网页和RN之间的数据交换。
         * 设置此属性的同时会在webview中注入一个postMessage的全局函数并覆盖可能已经存在的同名实现
         */
        onMessage: React.PropTypes.func,
        /**
         * 加载失败
         */
        renderError: React.PropTypes.func,
        /**
         * 设置一个函数，返回一个加载指示器。
         */
        renderLoading: React.PropTypes.func,
        /**
         * 加载开始
         */
        onLoadStart: React.PropTypes.func,
        /**
         * 加载结束
         */
        onLoadEnd: React.PropTypes.func,
        /**
         * 加载错误
         */
        onError: React.PropTypes.func,
        /**
         *加载成功时调用。
         */
        onLoad: React.PropTypes.func,
    }

//初始化数据
    constructor(props) {
        super(props)
        this.DEFAULT_URL = this.props.url;
        this.WEB_URL = ""
    }

    componentWillMount() {
        //添加监听事件  android平台 说明：BackAndroid在iOS平台下是一个空实现，所以理论上不做这个Platform.OS === 'android'判断也是安全的。
        //if (Platform.OS === 'android') {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
        //}
    }

    componentWillUnmount() {
        //移除监听事件  android平台 说明：BackAndroid在iOS平台下是一个空实现，所以理论上不做这个Platform.OS === 'android'判断也是安全的。
        //if (Platform.OS === 'android') {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        //}
    }

    componentDidMount() {

    }

//返回键  触发事件
    onBackAndroid() {
        //navigation 这样用
        // const {navigator} = this.props;
        // navigator.goBack()
        // if (this.reSetUrl(this.DEFAULT_URL) === this.reSetUrl(this.WEB_URL)) {
        //     //出栈 ，返回上一页
        //     if (navigator) {
        //         navigator.pop();
        //     }
        // } else {
        //     this.goBack()
        // }

        //react-navigation 这样用
        if (this.reSetUrl(this.DEFAULT_URL) === this.reSetUrl(this.WEB_URL)) {
            //出栈 ，返回上一页
            const {goBack} = this.props.navigation;
            goBack(null)
        } else {
            this.goBack()
        }
        return true;
    }

    reSetUrl(url) {
        if (url.indexOf("://")) {
            url = url.substring(url.indexOf("://"))
        }
        if (url[url.length - 1] === "/") {
            return url.substring(0, url.length - 1);
        }
        return url
    }

//状态变化
    onNavigationStateChange(navState) {
        this.WEB_URL = navState.url
    }

    goBack() {
        this.webView.goBack();
    }

    goForward() {
        this.webView.goForward();
    }

//设置一个函数，返回一个视图用于显示错误。
    renderError() {
        //返回自定义的错误页面
        if (this.props.renderError) {
            return this.props.renderError()
        }
        //默认返回的错误页面
        return (
            <TouchableWithoutFeedback onPress={this.reload.bind(this)} style={{padding: 9}}>
                <View style={styles.loadingView}>
                    <Text>加载失败，点击重新加载</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

//设置一个函数，返回一个加载指示器。
    renderLoading() {
        if (this.props.renderLoading) {
            return this.props.renderLoading();
        }
        return (
            <View style={styles.loadingView}>
                <ActivityIndicator size="large"/><Text>数据加载中,请稍等</Text>
            </View>
        );
    }

//加载失败
    onError() {
        if (this.props.onError) {
            return this.props.onError();
        }
    }

//加载成功
    onLoad() {
        if (this.props.onLoad) {
            return this.props.onLoad();
        }
    }

//加载开始
    onLoadStart() {
        if (this.props.onLoadStart) {
            return this.props.onLoadStart();
        }
    }

//加载结束
    onLoadEnd() {
        if (this.props.onLoadEnd) {
            return this.props.onLoadEnd();
        }
    }

//重新加载
    reload() {
        this.webView.reload();
    }

    /**
     * 实现web与RN交互
     */
    onMessage(event) {
        if (this.props.onMessage) {
            return this.props.onMessage(event);
        }
    }

    render() {
        return (
            <WebView
                ref={(c) => this.webView = c}
                style={styles.webView}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{uri: this.props.url}}
                scalesPageToFit={this.props.scalesPageToFit}
                dataDetectorTypes={this.props.dataDetectorTypes}
                automaticallyAdjustContentInsets={this.props.automaticallyAdjustContentInsets}
                decelerationRate={this.props.decelerationRate}
                startInLoadingState={this.props.startInLoadingState}
                onError={this.onError.bind(this)}
                onLoad={this.onLoad.bind(this)}
                onLoadStart={this.onLoadStart.bind(this)}
                onLoadEnd={this.onLoadEnd.bind(this)}
                renderError={this.renderError.bind(this)}
                renderLoading={this.renderLoading.bind(this)}
                onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                onMessage={this.onMessage.bind(this)}
                bounces={true}
            />
        );
    }
}
