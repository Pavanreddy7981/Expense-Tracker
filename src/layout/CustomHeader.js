import React from 'react'
import { Appbar } from 'react-native-paper'


const CustomHeader = ({route,navigation}) => {
    
    return(
        <Appbar.Header style={{backgroundColor : '#1d94f0',justifyContent:'center',alignItems:"center"}}>
            {route.name === "AddItem" ? <Appbar.BackAction onPress={() => navigation.goBack()} /> : null}
            <Appbar.Content title="Expense Tracker" />
        </Appbar.Header>
    )
}

export default CustomHeader;
