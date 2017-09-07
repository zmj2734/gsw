import React from "react"
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native"

export default class extends React.Component {
    static defaultProps = {
        leftIcon: "",
        leftTitle: "",
        centerTitle: "标题",
        rightIcon: "",
        rightTitle: ""
    };
    static propTypes = {
        leftonPress: React.PropTypes.func,
        rightonPress: React.PropTypes.func
    };

    leftonPress() {
        if (this.props.leftonPress)
            return this.props.leftonPress()
    }

    rightonPress() {
        if (this.props.rightonPress)
            return this.props.rightonPress()
    }

    render() {
        let widthStyle = 100 / 3;
        return (
            <View style={[styles.tabBackground, this.props.style]}>
                <View style={{width: widthStyle + "%", justifyContent: "center", marginLeft: 15}}>
                    <TouchableOpacity onPress={this.leftonPress.bind(this)}>
                        {this.props.leftIcon ?
                            <Image source={this.props.leftIcon} style={{width: 8, height: 13}}/> : null}
                        {this.props.leftTitle ? <Text
                            style={[{fontSize: 16}, this.props.titleStyle, this.props.rightTitleStyle]}>{this.props.leftTitle}</Text> : null}
                    </TouchableOpacity>
                </View>
                <View style={{width: widthStyle + "%", justifyContent: "center", alignItems: "center"}}>
                    <Text style={[{fontSize: 16}, this.props.titleStyle]}>
                        {this.props.centerTitle}
                    </Text>
                </View>
                <View style={{width: widthStyle + "%", justifyContent: "center", marginRight: 15, left: 0}}>
                    <TouchableOpacity onPress={this.rightonPress.bind(this)}>
                        {this.props.rightIcon ?
                            <Image source={this.props.rightIcon} style={{width: 8, height: 13}}/> : null}
                        {this.props.rightTitle ? <Text
                            style={[{
                                width: "100%",
                                textAlign: "right",
                                fontSize: 16
                            }, this.props.titleStyle, this.props.rightTitleStyle]}>{this.props.rightTitle}</Text> : null}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    tabBackground: {
        width: "100%",
        height: 40,
        backgroundColor: "white",
        justifyContent: "space-around",
        flexDirection: "row",
    }
})