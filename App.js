/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,Component} from 'react';
import { StyleSheet,View,Text,FlatList,ScrollView,TextInput,TouchableOpacity} from 'react-native';
import  Header  from './components/Header';
import  Gallery  from './components/Gallery';
import  Users  from './components/Users';

const App=()=>{
  const[username,setUsername]=useState('');
  const[repos,setRepos]=useState([]);

_handleChange = (evt) => {
  setUsername(evt.nativeEvent.text);
  
}
_getUserRepos = (username) => {
  username = username.toLowerCase().trim();
  const url = `https://api.github.com/users/${username}/repos`;
  
  return fetch(url).then((res) => res.json());

  
}
_handleSubmit = () => {
  _getUserRepos(username)
    .then((res) => {
      setRepos(res);
   
    });
}
_renderRepos = () => {
  return (  
    <ScrollView>
{repos.map((repo,i)=><Users key={i} repo={repo} index={i}/>)}
      
    </ScrollView>
  )
}

  return(
   
    <View style={styles.container}>

      <Header/>
     
      <Gallery/>
     
     
    

      

        <Text style={styles.label}>Lists Github User Repos</Text>
        <TextInput
          placeholder="Enter your github username"
          style={styles.input} onChange={_handleChange}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8} onPress={_handleSubmit}>
          
          <Text style={styles.buttonText}>VIEW</Text>
        </TouchableOpacity>
           {_renderRepos() }
          
       
           
      </View>
   
   
    
  )
};
  
const styles=StyleSheet.create({
  container:{
    flex:1,
      },


       label: {
    
  
     
         fontSize:20,
        color:'#fff',
        backgroundColor:'teal',
        padding:10,
        margin:0,
        marginTop:10
  },
  input: {
   
    height: 38,
    padding: 4,
    fontSize: 16,
    borderColor: '#3a3a3a',
    borderWidth: 1,
    borderRadius: 8,
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'#263238',
    borderColor: '#263238',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    alignSelf: 'center',
  }
  
})

export default App;
