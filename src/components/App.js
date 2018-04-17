import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SecondScreen from './SecondScreen'
import ListElement from './ListElement'

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        noteArray: ['Capitulo 1 - Sillicon Valley', 'Capitulo 1 - Breaking bad']
    };
  }
  render() {
    let notes = this.state.noteArray.map((val, key)=>{
      console.log(val)
      console.log(this.state.noteText)
      return <ListElement key={key} val={val} keyval={key}
      viewpassMethod= {()=>this.listPress(key)}
      > {val} y {key} </ListElement>
      //return <Text key={key} val={val}> {val} y {key} </Text>
    });
    return (
      

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Cubitos</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>
      </View>
    );
  }
  listPress(key){
    noteText = this.state.noteArray[key]
    this.props.navigation.navigate('Second', {text: noteText})
  }

}



export default  App = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Second: {
      screen: SecondScreen,
    }
  }, 
  {
    initialRouteName: 'Home'
  }
);

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  header: {
      backgroundColor: '#2196F3',
      alignItems: 'center',
      justifyContent:'center',
      borderBottomWidth: 5,
      borderBottomColor: '#90CAF9'
  },
  headerText: {
      color: 'white',
      fontSize: 18,
      padding: 20
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
  textInput: {
      flex: 1,
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth:2,
      borderTopColor: '#ededed'
  }
});


// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }
