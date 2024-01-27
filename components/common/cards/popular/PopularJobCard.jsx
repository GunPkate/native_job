import React from 'react'
import { View, Text,TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectedJob, handleCardpress}) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob,item)}
      opPress={()=> handleCardpress(item)}
    > 
      <TouchableOpacity style={styles.logoContainer(selectedJob,item)}>
        <Image
          source={{uri: item.employer_logo}}
          resizeMode='container'
          style={styles.logoimage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}> {item.employer_name} </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob,item)} numberOfLines={1}>
          {item.job_title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard