import React from 'react'
import { StyleSheet,View,Text,Image} from 'react-native';
import PropTypes from 'prop-types';



 const Gallery = () => {
    return (
        <View>
            <Text style={styles.text}>Gallery</Text>
            <View style={styles.container}>
              <Image style={styles.img} source={{uri:"https://source.unsplash.com/1600x100/?nature,water"}} />
              <Image style={styles.img} source={{uri:"https://source.unsplash.com/1600x200/?nature,water"}}/>
              <Image style={styles.img} source={{uri:"https://source.unsplash.com/1600x300/?nature,water"}}/>
             </View>
                <View style={styles.container}>
              <Image style={styles.img} source={{uri:"https://source.unsplash.com/1600x400/?nature,water"}}/>
              <Image style={styles.img} source={{uri:"https://source.unsplash.com/1600x500/?nature,water"}} />
              <Image style={styles.img} source={{uri:"https://source.unsplash.com/1600x600/?nature,water"}}/>
              </View>
            </View>
      
    )
}

const styles=StyleSheet.create({
    text:{
        fontSize:20,
        color:'#fff',
        backgroundColor:'teal',
        padding:10,
        margin:0,
        marginBottom:10
        
        
    },
    img:{
        width:120,
        height:100,
    
       
        margin:2
    },
    container:{
        flex:1,
        flexDirection:'row',
          justifyContent:'space-between',
        padding:60,
        paddingLeft:20,
        paddingRight:20,
       
        alignItems:'center',
         
        
        // alignContent:'space-around'
    }
})
export default Gallery;