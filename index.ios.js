'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text
} = React;


var Grid = require('./js/grid');


class Reacto extends React.Component {
  render() {
    return (
      <View style={styles.row}>
        <Text style={{fontSize:18,margin:30}}>SquarO react-native</Text>
        <View>
          <Grid 
              data={[0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0]} 
              width="300" 
              />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
    row: { 
      flexDirection: 'column', 
      alignItems: 'center',
      alignSelf: 'stretch'
    },
});


AppRegistry.registerComponent('reacto', () => Reacto);
