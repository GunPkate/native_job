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

const jobTypes = ["Full-time","Part-time","Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType,setAativeJobType] = useState('Full-time')
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

        <TouchableOpacity style={styles.searchBtn} onpress={() => {}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

export default Welcome