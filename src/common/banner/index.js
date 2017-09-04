import React from "react"
import {
    ScrollView,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Animated
} from "react-native"

export default class extends React.Component {
    static defaultProps = {
        autoRun : true ,
        screenWidth : Dimensions.get("window").width
    }

    static propTypes = {
        banners : React.PropTypes.array.isRequired ,
        bannerClick : React.PropTypes.func
    }

    constructor(props) {
        super(props) ;
        this.currentIndex = 0 ;
        this.state = {
            selectedImageIndex : 0 ,
        }
    }

    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }

    componentDidMount(){
        this.runFocusImage() ;
    }

    /**
     * 触屏滑动开始
     */
    onTouchStart(){
        // 当手指按到scrollview时停止定时任务
        //clearInterval(this.timer);
    }

    /**
     * 触屏滑动结束
     */
    onTouchEnd(){
        // 先滑动到指定index位置，再开启定时任务
        //this.scrollView.scrollTo({x:this.currentIndex * this.props.screenWidth,y:0,animated:true});
        //重新开启图片
        //this.runFocusImage();
        //this.setState({selectedImageIndex : this.currentIndex})
    }

    runFocusImage(){
        if(!this.props.autoRun)
            return ;
        if(this.props.banners.length <= 1){ // 只有一个则不启动定时任务
            return ;
        }
        this.timer = setInterval(function () {
            this.currentIndex++;
            if(this.currentIndex >= this.props.banners.length){
                this.currentIndex = 0;
            }
            this.scrollView.scrollTo({x:this.currentIndex * this.props.screenWidth,y:0,animated:true});
            this.setState({selectedImageIndex : this.currentIndex})
        }.bind(this), 3000);
    }

    /**
     * 滑动
     */
    onScroll(e){
        this.contentOffsetX = e.nativeEvent.contentOffset.x;
        this.currentIndex = Math.round(this.contentOffsetX / this.props.screenWidth);
        this.setState({selectedImageIndex : this.currentIndex})
    }


    /**
     * 滑动到底部
     */
    scrollToEnd() {

    }

    points(){
        // 小圆点指示器
        let circles = this.props.banners.map((value,i) => {
            return (<View key={i} style={ (i == this.currentIndex) ? bannerStyle.circleSelected : bannerStyle.circle}/>);
        });
        return circles
    }

    /**
     * banner点击
     */
    imageOnPress(){
        if(this.props.bannerClick){
            return this.props.bannerClick(this.currentIndex)
        }
    }

    createImage(){
        let images = [] ;
        for (let i = 0 ; i < this.props.banners.length ; i++){
            //let uri = {uri:this.props.banners[i].image};
            //let uri = this.props.banners[i].image;
            images.push (
                <TouchableOpacity key={"image"+i} onPress={this.imageOnPress.bind(this)} activeOpacity={1}>
                    <Image style={{
                        resizeMode: "stretch",
                        backgroundColor : "#3f4cdd" ,
                        flex : 1 ,
                        width : Dimensions.get("window").width
                    }}
                           source={{uri:this.props.banners[i].image}}/>
                </TouchableOpacity>
            );
        }
        return images ;
    }

    render() {
        let createThumbRow = (uri, i) => <Thumb {...this.props} key={i} uri={uri} index={i}/>;
        return (
            <View style={[bannerStyle.defaultStyle,this.props.style]}>
                <ScrollView
                    ref={(sv) => { this.scrollView = sv;}}
                    style={{flex:1}}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    onMomentumScrollStart={this.onTouchStart.bind(this)}
                    onMomentumScrollEnd={this.onTouchEnd.bind(this)}
                    onScroll={this.onScroll.bind(this)}
                >
                    <Animated.View style={{flexDirection:'row'}}>{this.createImage()}</Animated.View>
                </ScrollView>
                <View style={{position:"absolute",flexDirection:"row",width:"100%" ,
                    height : 10,
                    justifyContent:"center",alignItems:"center",backgroundColor:"transparent" ,
                    bottom : 3
                }}>
                    {this.points()}
                </View>
            </View>
        )
    }
}
let bannerStyle = StyleSheet.create({
    defaultStyle : {
        width:"100%",
        height:120,
        backgroundColor : "#d4d4d4"
    },
    circle: {
        width:5,
        height:5,
        borderRadius:5,
        backgroundColor:'#b3b3b3',
        marginHorizontal:2
    },
    circleSelected: {
        width:6,
        height:6,
        borderRadius:6,
        backgroundColor:'white',
        marginHorizontal:3
    }
})
