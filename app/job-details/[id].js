import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import useFetch from '../../hook/useFetch';
import {useState} from 'react'
// import { Company, JobAbout,JobFooter,JobTabs, ScreenHeaderBtn } from '../../components/jobdetails'
import { COLORS, icons, SIZES } from '../../constants'
import { useRouter, Stack, useLocalSearchParams} from 'expo-router';
import  ScreenHeaderBtn  from '../../components/common/header/ScreenHeaderBtn'
import Company from '../../components/jobdetails/company/Company'
import About from '../../components/jobdetails/about/About'
import Footer from '../../components/jobdetails/footer/Footer'
import Specifics from '../../components/jobdetails/specifics/Specifics'
import Tabs from '../../components/jobdetails/tabs/Tabs'


const jobDetails = () =>{
    const params = useLocalSearchParams();
    const router = useRouter();

    const [refreshing,setRefreshing] = useState(false);
    const {data, isLoading, error, refetch} = useFetch('job-details',{job_id: params.id})
    console.log("002 jobDetails",data)

    const tabs = ["About","Qualifications","Responsibilities"];
    const [activeTab,setActiveTab] = useState(tabs[0]);
    const onRefresh = () =>{

    } 
    return (
        
        <SafeAreaView
            style={{flex:1 , backgroundColor: COLORS.lightWhite}}
        >
            
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor : COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: ()=> (
                        <ScreenHeaderBtn
                            iconUrl = {icons.left}
                            dimensoin="60%"
                            handlePress={() => router.back()}
                        />
                    ),
                    headerRight: ()=> (
                        <ScreenHeaderBtn
                            iconUrl = {icons.share}
                            dimensoin="60%"
                            // handlePress={() => router.back()}
                        />
                    ),
                    headerTitle:""
                }}
            >
            </Stack.Screen>
            <>
                <ScrollView showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                >
                
                    {isLoading ? 
                        (<ActivityIndicator size="large" color={COLORS.primary}/> )
                        : error ? ( <Text>Something went wrong</Text> )
                        : data.length === 0 ? ( <Text>No Data</Text>)
                        : (<View style={{padding: SIZES.medium, paddingBottom: 100}}>
                            <Company
                                companyLogo={data[0].employer_logo}
                                jobTitle={data[0].job_title}
                                companyName={data[0].employer_name}
                                location={data[0].job_country}
                            />
                            <Tabs
                                tabs = {tabs}
                                activeTab = {activeTab}
                                setActiveTab = {setActiveTab}
                            />
                        </View>)
                    }
                </ScrollView>
            </>

        </SafeAreaView>
    )
}

export default jobDetails;
