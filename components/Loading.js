import React from 'react';
import {View,Text,StyleSheet, Image} from 'react-native';

export default function Loading(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Nice To Meet You!</Text>
            <Image style={{width: 300, height: 300}} source={require('../assets/loading.gif')} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        //앱의 배경 색
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize:30,
        fontWeight:'700'
    }

})