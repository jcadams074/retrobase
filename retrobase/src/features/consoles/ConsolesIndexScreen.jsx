import React from 'react';
import {View, StyleSheet} from 'react-native';
import ConsoleCard from './components/ConsoleCard';
import { FlatList } from 'react-native-gesture-handler';

const data = [
    {id: 'atari_2600'},
    {id: 'nes'},
    {id: 'genesis'},
    {id: 'snes'}, 
    {id: 'n64'},
    {id: 'ps1'},
    {id: 'ps2'},
    {id: 'gamecube'},
    {id: 'ps3'},
]
   
export default function ConsolesIndexScreen(){
    return(
        <View style={styles.container}>
            <FlatList
                data={data} 
                renderItem={({item}) => <ConsoleCard title={item.title}/>}
                keyExtractor={item => item.id}           
                numColumns={2} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
       
    }
});
