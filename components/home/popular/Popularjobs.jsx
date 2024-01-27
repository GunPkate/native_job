import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { useRouter } from 'expo-router';
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  // let isLoading = false;
  // let error = false;
  const router = useRouter();

  const {data, isLoading, error} = useFetch('search', { query: 'React Developer',num_pages: 1} )
 
//  console.log('001 jobs',JSON.stringify(data));
 console.log('001 jobs',(data));
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (<ActivityIndicator size="large" colors={COLORS.primary}/>) : error 
            ? (<Text>Something went wrong</Text>) : (
              <FlatList
                data = {data}
                renderItem = { ({item}) => (
                  <PopularJobCard
                    item={item}
                  />
                )}
                // keyExtractor={item => item?job_id }
                contentContainerStyle = {{columnGap: SIZES.medium}}
                horizontal
              />
            )}
      </View>
    </View>
  )
}

export default Popularjobs