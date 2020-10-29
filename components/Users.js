import React from 'react'
import { StyleSheet,View,Text,FlatList,ScrollView,TextInput,TouchableOpacity,Image} from 'react-native';

const Users = ({repo,index}) => {
    return (
        <View>

             
    <Text style={styles.text}>{index+1}.{repo.full_name}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    text:{
       marginLeft:10
    }
})
export default Users;