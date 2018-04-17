import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class ListElement extends React.Component {

    render(){
        return(
            
            <TouchableOpacity onPress={this.props.viewpassMethod} >
                <View key={this.props.keyval} style={styles.note}>
                    <Text style={styles.listText}>{this.props.val}</Text>                  
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    listText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    }
});