import React from 'react'
import {  FlatList, StyleSheet, Text, View } from 'react-native';
import { FAB, Headline,Subheading} from 'react-native-paper';
import CustomItem from '../components/CustomItem';
import {connect} from "react-redux"


const HomeScreen = ({navigation,items, loading,total}) => {

    return (
        <>
            <Headline style={styles.headline}>MY EXPENSES</Headline>
            <Subheading style={styles.subheading}> TOTAL - Rs {total}</Subheading>
            
            {items == "" ? (
                <View style={styles.container}>
                    <Text style={styles.text}>No Available Items. Please add items</Text>
                </View>
            )  : (
                <>
                <FlatList 
                data={items}
                renderItem={({item}) => <CustomItem item={item}/>}
                />
                </>
            )}

            <FAB
                style={styles.fab}
                large
                icon="plus"
                onPress={() => navigation.navigate("AddItem")}
            />
        </>
    )
}

const mapStateToProps = (state) => ({
    items : state.item.items,
    loading : state.item.loading,
    total : state.item.items.reduce((itemsTotal, item) => (itemsTotal) + ( item.amount),0)
})

export default connect(mapStateToProps,null)(HomeScreen)

const styles = StyleSheet.create({
      fab: {
        position: 'absolute',
        margin: 15,
        right: 0,
        bottom: 0,
        backgroundColor:"green",
        color: "white",
  },
    headline : {
        fontSize : 30,
        color : "tomato",
        fontWeight : "600",
        textAlign : "center",
        padding : 10
    },
     subheading : {
         fontSize : 20,
         fontWeight : "600",
         margin : 10,
         textAlign : "center",
     },
     loading : {
         flex : 1,
         justifyContent : "center",
         alignItems : "center",
     },
     container : {
          flex : 1,
         justifyContent : "center",
         alignItems : "center",
     },
     text : {
         fontSize : 20,
         color : "gray",
         textAlign : "center",
         width : "80%"
     }
})
