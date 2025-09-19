import React from 'react';
import {View, StyleSheet} from 'react-native';
import ConsoleCard from './components/ConsoleCard';

export default function ConsolesIndexScreen(){
    return(
        <View style={styles.container}>
            <ConsoleCard imgSrc={require('./assets/logos/snes_logo.png')} title={'Super Nintendo Entertainment System'}/>
            <ConsoleCard imgSrc={'hello'} title={'Nintendo Entertainment System'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row', 
        flexWrap: 'wrap'
    }
});
