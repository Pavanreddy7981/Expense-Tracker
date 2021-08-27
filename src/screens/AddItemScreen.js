import React, {useState,useEffect} from 'react'
import {  ScrollView, StyleSheet, Text, View,ToastAndroid } from 'react-native'
import { Title ,TextInput, Button, Snackbar} from 'react-native-paper';

//redux 
import {connect,useDispatch} from "react-redux";

//shortId is for unique id 
import shortid from "shortid";

//action.types
import { SET_ITEMS } from '../actions/action.types';


const AddItemScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [note, setNote] = useState("")
    const [date, setDate] = useState("")

    //useEffect is for the getting the current day date
    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        
        setDate(
            date + '/' + month + '/' + year 
        );
    }, []);

    //method defined for the adding item in the array

    const addItem = async() => {
        if(!title && !amount && !note && !date ){
               alert("please add all the feilds")
        }
        let item = {
            title : title,
            amount : parseFloat(amount),
            note : note,
            date : date,
            id : shortid.generate()
        }

        try {
            dispatch({
                type : SET_ITEMS,
                payload : item
            })

             ToastAndroid.showWithGravityAndOffset(
                    'You added the post',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    15,
                    50
            );

            navigation.navigate("Home")
            
        } catch (error) {
            alert("ERROR WHILE POSTING " ,error)
        }
    }

    return (
        <ScrollView>

            <Title style={styles.title}>Add Item</Title>

              <TextInput
                mode="outlined"
                label="Title"
                placeholder="add a title"
                value={title}
                style={styles.input}
                placeholderTextColor="#8d81a3"
                outlineColor="#8d81a3"
                onChangeText={text => setTitle(text)}
                />

                <TextInput
                mode="outlined"
                label="Amount"
                placeholder="$"
                value={amount}
                style={styles.input}
                placeholderTextColor="#8d81a3"
                outlineColor="#8d81a3"
                onChangeText={text => setAmount(text)}
                />

                <TextInput
                mode="outlined"
                label="Note"
                placeholder="Add a note"
                value={note}
                style={styles.input}
                placeholderTextColor="#8d81a3"
                outlineColor="#8d81a3"
                onChangeText={text => setNote(text)}
                />

                <TextInput
                mode="outlined"
                disabled
                label="Date"
                placeholder="date"
                value={date}
                style={styles.input}
                placeholderTextColor="#8d81a3"
                outlineColor="#8d81a3"
                />
             
                <Button  mode="contained" style={styles.button} onPress={addItem}>
                    Add Expense
                </Button>

        </ScrollView>
    )
}

export default connect()(AddItemScreen)

const styles = StyleSheet.create({
    title : {
        textAlign :"center",
        marginVertical : 10,
        color: "green"
    },
    input : {
        marginVertical:10,
        marginHorizontal : 10,
    },
    button : {
        marginHorizontal  :10,
        marginVertical : 10,
        backgroundColor : "green"
    }
})
