'use strict';

var React = require('react-native');

var {
  View
} = React;

var Circle = require('./circle');
var Square = require('./square');

class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {userClicks : Array.apply(null, Array(props.data.length)).map(Number.prototype.valueOf,0)};
    }


    handleCircleClick(cirle) {
    
        var pUserClicks = this.state.userClicks;
        pUserClicks[cirle.props.index] = 1 - cirle.props.value ;

        var gagne = true;
        for (var i = this.props.data.length - 1; i >= 0; i--) {
            if (this.props.data[i]!=pUserClicks[i]){
                gagne = false;
                break;
            }
        };
        

        if (gagne){
             alert("bravo vous avez gagné !!" );
        }

       

        this.setState({userClicks : pUserClicks});
        
    }

    getNumber(arr,i,j){

        var size = Math.sqrt(arr.length);
        var i1 = i + j * size ; 
        var i2 = (i + 1) +  j * size ;
        var i3 =  i +  (j + 1) * size ;
        var i4 =  (i + 1) +  (j + 1) * size ;

        return arr[i1] + arr[i2] + arr[i3] + arr[i4];
    }

    render() {


        var size = Math.sqrt(this.props.data.length);
        var figures = new Array((size-1)*(size-1));
        for (var i = 0; i < (size - 1 ); i++) {
            for (var j = 0; j < (size - 1 ); j++) {
                figures[i + j*(size-1)] = this.getNumber(this.props.data,i,j);
            }
        };

        var circleRadius = this.props.width / 20 ; 
        var circleBorder = 2 ;
        var fontSize = this.props.width / 10 ;

        var gridH = parseInt(this.props.width) + 2 * (circleRadius + circleBorder);
        var gridW = parseInt(this.props.width)+ 2*circleRadius;

        var divStyle = {
            position:'relative',
            width: gridW, 
            height: gridH 
        };


        return (
            <View className="grid" style = {divStyle} >
            {
                figures.map(
                    function(value, i) {

                        var row = i % (size - 1);
                        var col = Math.floor( i / (size -1)) ;

                        var showLeftBorder = (row == 0);
                        var showBottomBorder = (col == (size -2));

                        var isValid = (this.getNumber(this.props.data,row,col) == this.getNumber(this.state.userClicks,row,col))

                        return (
                            <Square 
                                    key = {i} 
                                    row = {row}
                                    col = {col}
                                    number = {value} 
                                    isValid = {isValid}
                                    showLeftBorder = {showLeftBorder}
                                    showBottomBorder = {showBottomBorder}
                                    pxOffset = { circleRadius }
                                    pxSize = { this.props.width / (size -1) }
                                    fontSize = {fontSize}
                            />
                          );
                    }, 
                    this
                )
            }
             {
                this.state.userClicks.map(
                    function(value, i) {

                        var row = i % size ;
                        var col = Math.floor( i / size ) ;

                        return (
                            <Circle handler = {this.handleCircleClick.bind(this)} 
                                    key = {i} 
                                    index = {i} 
                                    value = {value}
                                    row = {row}
                                    col = {col}
                                    radius = {circleRadius}
                                    borderSize = {circleBorder}
                                    pxOffset = {this.props.width / (size -1)}
                            />
                          );
                    }, 
                    this
                )
            }
            </View>
    );
  }
}

module.exports = Grid;