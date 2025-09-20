import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';

type props = {
    title: string
}

const ConsoleCard = (props: props) =>{
    return(
        <View style={styles.container}>
            <Pressable>
                <Text style={styles.title}>IMAGE</Text>
                <Text style={styles.title}>{props.title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: 150,
        height: 150,
        flexDirection:'column', 
        justifyContent:'flex-end',
        borderRadius: 25, 
        margin: 20,
        backgroundColor:'#FFF'
    }, 
    title:{
        textAlign: 'center', 
        padding:10
    }
});

export default ConsoleCard;