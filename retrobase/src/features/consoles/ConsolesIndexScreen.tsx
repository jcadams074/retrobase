import React from 'react';
import {View, StyleSheet} from 'react-native';
import ConsoleCard from './components/ConsoleCard';
import { FlatList } from 'react-native-gesture-handler';

const data = [
    {id: 'atari_2600', title: 'Atari 2600'},
    {id: 'nes', title: 'Nintendo Entertainment System'},
    {id: 'genesis', title: 'Sega Genesis'},
    {id: 'snes', title: 'Super Nintendo Entertainment System'}, 
    {id: 'n64', title: 'Nintendo 64'},
    {id: 'ps1', title: 'Playstation'},
    {id: 'ps2', title: 'Playstation 2'},
    {id: 'gamecube', title: 'Nintendo Gamecube'},
    {id: 'ps3', title: 'Playstation 3'},
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
       alignItems: 'center',
       justifyContent:'space-around', 
       backgroundColor:'#ECD4C8'
    }
});
