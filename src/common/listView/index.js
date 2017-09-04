/**
 * Created by zmj on 2017/4/25.
 */
import React from "react"
import {
    View,
    Animated,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    Text,
    Image
} from "react-native"


import styles from "./index.css"

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class listView extends React.PureComponent {

    static defaultProps = {
        data: {
            code: 0,               //0:数据成功 1:数据为空 2: 网络连接失败
            data: [],
            message: "",
            url: ""                //错误图片显示
        },
        emptyStyle: styles.emptyView,
        horizontal: false,
        legacyImplementation: false      //true 则用原来的ListView
    } ;

    static propTypes = {
        data: React.PropTypes.object,
        horizontal: React.PropTypes.bool,
        legacyImplementation: React.PropTypes.bool,
        ItemSeparatorComponent: React.PropTypes.func,
        loadMore: React.PropTypes.func,
        onRefresh: React.PropTypes.func,
        renderItem: React.PropTypes.func,
    } ;

    constructor(props) {
        super(props) ;
        this.state = {
            refreshing: false,
            code: this.props.data.code,               //0:数据成功 1:数据为空 2: 网络连接失败
            data: this.props.data.data,
            message: this.props.data.message,
            url: this.props.data.url                //错误图片显示
        }
    }

    /**
     * 行间距
     * @returns {XML}
     * @constructor
     */
    ItemSeparatorComponent() {
        if (this.props.ItemSeparatorComponent) {
            return this.props.ItemSeparatorComponent()
        }
        return null ;
    }

    /**
     * 刷新
     */
    onRefresh() {
        if (this.props.onRefresh) {
            this.props.onRefresh(function (resultData) {

            })
        }
    }

    refresh() {

    }

    /**
     * 加载更多
     */
    loadMore() {
        if (this.props.loadMore) {
            this.props.loadMore(function (resultData) {

            })
        }
    }

    /**
     * 行/列 数据渲染
     */
    renderItem(item) {
        if (this.props.renderItem) {
            return this.props.renderItem(item)
        }
    }

    keyExtractor(item, index) {
        return "key" + index
    }

    /**
     * 启动网络设置界面
     */
    checkNetWork() {

    }

    /**
     * 网络失败
     * @returns {XML}
     */
    netWorkError() {
        return (
            <View style={this.props.emptyStyle}>
                {this.createImageView(this.state.url)}
                <Text>{this.state.message ? this.state.message : "网络连接失败,请检查网络"}</Text>
                <TouchableOpacity style={{marginTop: 50}} onPress={this.checkNetWork.bind(this)}>
                    <Text style={{color: "#208ed9"}}>网络设置</Text>
                </TouchableOpacity>
            </View>
        )
    }

    /**
     * 无数据
     * @returns {XML}
     */
    empty() {
        return (
            <View style={this.props.emptyStyle}>
                {this.createImageView(this.state.url)}
                <Text>{this.state.message ? this.state.message : "暂无数据"}</Text>
                <TouchableOpacity style={{marginTop: 50}} onPress={this.refresh.bind(this)}>
                    <Text style={{color: "#208ed9"}}>点击刷新</Text>
                </TouchableOpacity>
            </View>
        )
    }

    /**
     * 创建图片界面
     * @param url
     * @returns {*}
     */
    createImageView(url) {
        let imageView = null ;
        if (url) {
            if (url.toString().startsWith("http") > 0) {
                imageView = <Image source={{uri: url}} style={{width: 200, height: 200, top: -20}} />
            } else {
                imageView = <Image source={this.state.url} style={{width: 200, height: 200, top: -20}}/>
            }
        }
        return imageView
    }

    render() {
        if (this.state.code === 1) {
            return this.empty()
        }
        if (this.state.code === 2) {
            return this.netWorkError()
        }
        if (this.state.code === 0) {
            if (!this.state.data || this.state.data.length === 0) {
                return this.empty()
            }
            return (
                <View style={styles.view}>
                    <AnimatedFlatList
                        ref={(c) => this.listView = c}
                        ItemSeparatorComponent={this.ItemSeparatorComponent.bind(this)}
                        data={this.state.data}
                        horizontal={this.props.horizontal}
                        legacyImplementation={this.props.legacyImplementation}
                        onEndReached={this.loadMore.bind(this)}
                        onRefresh={this.onRefresh.bind(this)}
                        refreshing={this.state.refreshing}
                        renderItem={this.renderItem.bind(this)}
                        keyExtractor={this.keyExtractor.bind(this)}
                        showsHorizontalScrollIndicator={false}
                        showsVerticlScrollIndicator={false}
                        getItemLayout={(data, index) => ( {length: 40, offset: 40.5 * index, index} )}
                    />
                    {this.state.indicator? <ActivityIndicator style={styles.indicator}/> : null }
                </View>

            )
        }
    }
}
