// import React,{useState} from 'react'
// import { StyleSheet,View,Text,TextInput,TouchableOpacity} from 'react-native';
// import PropTypes from 'prop-types'
// import Icon from 'react-native-vector-icons/dist/FontAwesome'


//  const AddItem = ({title,addItem}) => {
//      const [text,setText]=useState('');

// const onChange=(textValue)=>setText(textValue)

//     return (
//         <View>
//             <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onChange}/>
//             <TouchableOpacity style={styles.btn} onPress={()=>addItem(text)}>
//                 <Text style={styles.btn}><Icon name="plus" size={20} />Add Item</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// const styles=StyleSheet.create({
// input:{
//     height:60,
//     padding:8,
//     fontSize:16
// },
// btn:{
//     backgroundColor:"#c2bad8",
//     padding:2,
//     margin:5
// },
// btnText:{
//     color:'darkslateblue',
//     fontSize:20,
//     textAlign:'center'
// }
// })

// export default AddItem;