import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import UserDetail from './UserDetails';
import UserDetails from './UserDetails';

export default function App() {
  return (
    <View style={styles.container}>
       <Image
        source={require("./sphe.png")}
        style={styles.profilePicture}
      />
      <View style={styles.detailsBox}>
      <UserDetails label="REABETSOE SEPHEKOLA" value="10hrs"/>
      
      </View>

     <view><AntDesign name="ellipsis1" size={24} color="black" /></view>

      <AntDesign name="picture" size={400} color="black" />
      <SimpleLineIcons name="like" size={24} color="black" />
      <FontAwesome5 name="comment-alt" size={24} color="black" />
      <FontAwesome6 name="share" size={24} color="black" />
      
      
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'space-between'
    
  },
 
  white: {
    color: 'white',
    fontSize: 20,
    marginBottom: 5,
    
    
  },
  profilePicture: {
    paddingTop:0,
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  boody: {
    alignContent: 'flex-start',

  },
 
});
