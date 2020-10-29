import React from 'react'
import { StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types'


 const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
Header.defaultProps={
    title:'React Native Test App'
}
const styles=StyleSheet.create({
header:{
    height:60,
    padding:15,
    backgroundColor:'darkslateblue'
},
text:{
    color:'#fff',
    fontSize:23,
    textAlign:'center'
}
})
Header.propTypes={
    title: PropTypes.string.isRequired,
}
export default Header;