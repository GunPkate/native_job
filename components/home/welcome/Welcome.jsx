import { useState } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,FlatList
 } from 'react-native'

import styles from './welcome.style'
import { useRouter } from 'expo-router' 
import { icons,SIZES } from '../../../constants'

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View>
        <View style={styles.container}>
          <Text style={styles.userName}>Hello Adrian</Text>
          <Text style={styles.WelcomeMessage}>Find your perfect job</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={ styles.searchInput}
            value = ""            
            onChange = {()=>{}}
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome