import React from 'react'
import { View, Text } from 'react-native'

import styles from './company.style'

const Company = ({
  companyLogo,
  jobTitle,
  companyName,
  location,
}) => {
  console.log("001",companyLogo)
  return (
    <View>
      <Text>{jobTitle}</Text>
    </View>
  )
}

export default Company