'use strict';

var React = require('react-native');

var {
  View,
  Text
} = React;

class Square extends React.Component {

  render() {
    

    var borderSize = '2';
    var borderStyle = '#333';

    var viewStyle = {
            position : 'absolute',
            left : this.props.pxOffset + this.props.row * this.props.pxSize,
            top : this.props.pxOffset + this.props.col * this.props.pxSize ,
            width : this.props.pxSize ,
            height: this.props.pxSize ,
            lineHeight: this.props.pxSize + 'px',
            borderRight: borderStyle,
            borderTop: borderStyle,
            borderLeftColor : (this.props.showLeftBorder) ? borderStyle : '#fff',
            borderBottomColor : (this.props.showBottomBorder) ? borderStyle : '#fff',
            borderWidth : borderSize,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        };


    var numberStyle = {
            textAlign:'center',
            fontSize : this.props.fontSize ,
            color : (this.props.isValid) ? ('#000000') : ('#ff0000'),
        }


    return (
        <View className="square" style={viewStyle}>
             <Text style={numberStyle}>{this.props.number}</Text>
        </View>
    );
  }
}

module.exports = Square;