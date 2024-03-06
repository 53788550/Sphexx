import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
export default function UserDetails(props){
    return(
    <View style={StyleSheet.container}>
        <Text style={styles.label}>{props.label}</Text>
        <Text style={styles.value}>{props.value}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingHorizontal:30,

    },
    label: {
        fontWeight:500
    },
    value: {
        color: 'white'
    }
})