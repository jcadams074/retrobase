import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';

const ConsoleCard = ({title, imgSrc}) =>{
    return(
        <View style={styles.container}>
            <Pressable>
                <Image source={imgSrc} style={styles.image}></Image>
                <Text style={styles.title}>{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: 170,
        height: 170,
        flexDirection:'column', 
        justifyContent:'flex-end',
        borderColor: 'black', 
        borderWidth: 1, 
        borderRadius: 25, 
        margin: 10
    }, 
    title:{
        textAlign: 'center', 
        padding:10
    }
});

export default ConsoleCard;