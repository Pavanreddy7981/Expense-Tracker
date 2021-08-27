import React from 'react'
import { StyleSheet, View, ToastAndroid } from 'react-native'
import {  Button, Caption, Card, Paragraph, Title } from 'react-native-paper';

//redux
import {connect, useDispatch} from "react-redux";

//action.types
import { DELETE_ITEM } from '../actions/action.types';

const CustomItem = ({item}) => {
    const dispatch = useDispatch()

    //method for the deleting the item in the array

    const deleteItem = () => {
        try {
             dispatch({
                type : DELETE_ITEM,
                payload : item.id
            })

              ToastAndroid.showWithGravityAndOffset(
                    'You deleted the post',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
            );
        } catch (error) {
            alert("ERROR WHILE DELETING", error)
        }
    }

    return (
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                    <View >
                        <Title>{item.title}</Title>
                        <Paragraph style={{maxWidth : 250}}>NOTE - {item.note}</Paragraph>
                        <Caption>{item.date}</Caption>
                    </View>
                    <Title style={styles.price}>Rs - {item.amount}</Title>
                </Card.Content>

                <Card.Actions>
                    <Button color="red" onPress={deleteItem}>Delete</Button>  
                </Card.Actions>
            </Card>

    )
}

export default connect()(CustomItem)

const styles = StyleSheet.create({
    card : {
        marginVertical : 5,
        
    },
    cardContent : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    price : {
        color: "#b8402e"
    }
})
