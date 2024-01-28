import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import useFetch from '../../hook/useFetch';
// import { Company, JobAbout,JobFooter,JobTabs, ScreenHeaderBtn } from '../../components/jobdetails'
import { COLORS, icons, SIZES } from '../../constants'
import { useRouter, Stack, useLocalSearchParams} from 'expo-router';

const jobDetails = () =>{
    const params = useLocalSearchParams();
    const router = useRouter();

    const {data, isLoading, error, refetch} = useFetch('job-details',{job_id: params.id})
    console.log(data)
    return (
        <Text>1234</Text>
    )
}

export default jobDetails;
