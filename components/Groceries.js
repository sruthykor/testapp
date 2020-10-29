// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React,{useState} from 'react';
// import { StyleSheet,View,Text,FlatList,Alert,ScrollView,SwiperFlatList} from 'react-native';

// import uuid from 'uuid';
// import AddItem from './AddItem';
// import ListItem from './ListItem'




// const Groceries=()=>{
//   const[items,setItems]=useState([
//     {id:uuid(), text:'Milk' },
//     { id:uuid(),text:'Bread' },
//     { id:uuid(),text:'Eggs' },
//     { id:uuid(),text:'Juice' }
//   ])
// const addItem=(text)=>{
//     if(!text){
// Alert.alert('Please enter an item')
//     }else{
//         setItems(prevItems=>{
//     return [{id:uuid(),text:text},...prevItems]
// })
//     }

// }
//   const deleteItem=(id)=>{
//       setItems(prevItems=>{
//           return prevItems.filter(item=>item.id!=id)
//       })
//   }
//   return(
//     <View>
//         <Text style={styles.text}>Grocery Items</Text>
//          <View style={styles.container}>
//         <AddItem addItem={addItem}/>
//          <FlatList data={items} renderItem={({item})=><ListItem key={item.id} item={item} deleteItem={deleteItem}/>}/>
//          </View> 
//      </View>
//   )
// };

// const styles=StyleSheet.create({
  
    
//   text:{
//         fontSize:20,
//         color:'#fff',
//         backgroundColor:'teal',
//         padding:10,
//         margin:0,
//         marginTop:10,
//         marginBottom:10
        
        
//     },


  
// })

// export default Groceries;
