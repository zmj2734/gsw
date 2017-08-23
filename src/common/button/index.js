import React from "react"
import { RaisedTextButton } from "react-native-material-buttons"

export default class extends React.Component{
    static defaultProps = {
        defaultColor : 'rgb(0, 145, 234)',
        title : "submit" ,
        titleColor : "white"
    }
    static propTypes = {
        onSubmit : React.PropTypes.func ,
        title : React.PropTypes.string,
        titleColor : React.PropTypes.string,
        color : React.PropTypes.string
    }
    onSubmit(){
        if(this.props.onSubmit)
            return this.props.onSubmit()
    }
    render(){
        return (
            <RaisedTextButton onPress={this.onSubmit.bind(this)} title={this.props.title} titleColor={this.props.titleColor}
                              color={this.props.defaultColor} style={{width:"100%"}|| this.props.style}/>
        )
    }
}