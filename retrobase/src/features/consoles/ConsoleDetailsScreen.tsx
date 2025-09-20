import React from 'react'; 
import {View, Text} from 'react-native';

type props = {
    id: string
}

export default function ConsoleDetailsScreen(props:props){
    return(
        <View>
            <Text>This is the details screen for {props.id}</Text>
        </View>
    );
}