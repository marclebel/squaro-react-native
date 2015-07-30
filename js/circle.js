'use strict';

var React = require('react-native');

var {
  View,
  TouchableHighlight
} = React;

class Circle extends React.Component {

    constructor(props) {
        super(props);
    }

    circleClick() {
       this.props.handler(this);
    }

    render() {
        
        var viewStyle = {
            position : 'absolute',
            backgroundColor : (this.props.value==0)?'#ffffff':'#0000ff',
            left : this.props.row * this.props.pxOffset ,
            top : this.props.col * this.props.pxOffset ,
            width : 2*this.props.radius ,
            height: 2*this.props.radius ,
            border: this.props.borderSize ,
            borderColor : '#000000',
            borderRadius: this.props.radius ,
            borderWidth : 1
        };

        return (
           <TouchableHighlight  onPress = {this.circleClick.bind(this)}>
            <View className = "circle" 
                   style={viewStyle}
                 
                 />     
             </TouchableHighlight>
        );
    }

}

module.exports = Circle;