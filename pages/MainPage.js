import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView, Alert} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking';

/* 파일관리 라이브러리 */
import * as FileSystem from 'expo-file-system';
import { initializeDirectory } from '../components/InitializeDirectory.js';

import Loading from '../components/Loading';

/* 테스트 용으로 디텍토리 내부 모든 파일 출력 */
// FileSystem.readDirectoryAsync(FileSystem.documentDirectory + 'DongYangInterviewPhone/')
//   .then((fileList) => {
//     console.log(fileList);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// 수업 목록 데이터 추가하면 자동으로 버튼 생성
const courseData = ["Content1", "Content2", "Content3", "Content4",
                    "Content5", "Content6", "Content7", "Content8",
                    "Content9", "Content10", "Content11", "Content12", 
                    "Content13", "Content14", "Content15", "Content16",
                    "Content17", "Content18", "Content19", "Content20"]


// 수업 목록 버튼 색상
// 수업 목록 보다 개수가 동일 하거나 무조건 많아야 함
const buttonColors = ["#e70015", "#8a5a44", "#CE7777", "#27a300", 
                      "#F6BD60", "#b7cb22", "#13A953", "#84A59D",
                      "#FB8331", "#0B66C2", "#bc4749", "#33A1A5", 
                      "#1DC1FF", "#ffb703", "#FF4641", "#bc6c25", 
                      "#8338ec", "#2a9d8f", "#264653", "#9e0059"]

// initializeDirectory(courseData); // 없을 경우 파일 디렉토리 생성 및 파일 다운

const MainPage = ({navigation, route}) => {
    const [dimensions, setDimensions] = useState({ width: Dimensions.get("window").width, height: Dimensions.get("window").height });
    let isPortrait = Dimensions.get("window").height > Dimensions.get("window").width
    useEffect(() => {
        Dimensions.addEventListener('change', newDimensions => {
            setDimensions(newDimensions.window);
        });
        isPortrait = dimensions.height>dimensions.width
      }, [dimensions]);

    //const [ready, setReady] = useState(true)
    let [resetCounter, setResetCounter] = useState(0)

    // useEffect(() => {
    //     setTimeout(()=>{
    //         setReady(false)
    //     },2500);
    // }, [])

    useEffect(()=>{
        if(resetCounter == 10){
            /* /DongYangInterviewPhone 디렉토리가 존재하면 삭제 */
            FileSystem.deleteAsync(FileSystem.documentDirectory + '/DongYangInterviewPhone/');

            initializeDirectory(courseData);
            setResetCounter(0);
            Alert.alert('File Updated', 'Complete!');
            
        }
    }, [resetCounter])
    //return ready ? <Loading /> : (
    return(
        <ScrollView style={styles.container}>
            <StatusBar hidden/>
            <LinearGradient
                // 그라디에이션 주기
                colors={['transparent', '#ffd3dc']}
                style={styles.background}
            >
            
            {/* 화면 버튼 섹션 */}
            <ScrollView>
                <TouchableOpacity onPress={()=>{setResetCounter(resetCounter+1)}}>
                    <Image style={styles.mainImage} source={require('../assets/logo.jpg')}/>
                </TouchableOpacity>
                <Text style={styles.title}>Business Name</Text>
                <Text style={styles.subtitle}>Sub Title</Text>
                <View style={isPortrait ? styles.homepageBoxPortrait :styles.homepageBoxLandscape}>
                    <View style={isPortrait ? styles.homepageItemPortrait : styles.homepageItemLandscape}>
                        <TouchableOpacity style={styles.homepageButton} onPress={()=>{Linking.openURL('https://www.google.com')}}>
                            <Text style={styles.homeText}>🌕  Your Home Page</Text>
                        </TouchableOpacity>
                    </View> 
                    <View style={isPortrait ? styles.homepageItemPortrait : styles.homepageItemLandscape}>
                        <TouchableOpacity style={styles.homepageButton} onPress={()=>{Linking.openURL('https://www.google.com')}}>
                            <Text style={styles.homeText}>🔴  Your Second Main Page</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={isPortrait ? styles.buttonBoxPortrait : styles.buttonBoxLandscape}>
                {
                    courseData.map((item, index)=>
                        <View key={item} style={isPortrait ? styles.itemPortrait : styles.itemLandscape}>
                            <TouchableOpacity style={[styles.courseButton, {backgroundColor: buttonColors[index]}]} onPress={()=>{navigation.navigate('CoursePage', {item})}}>
                                <Text style={styles.courseText}>{item}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
                </View>
            </ScrollView>

            </LinearGradient>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        background: '#fff',
    },
    background: {
        height: '100%', // 현재 기기의 최대 화면 길이 까지 그라디에션 추가
    },
    mainImage: {
        width: 60,
        height: 60,
        marginTop: 50,
        alignSelf:"center" // 가운데 정렬
    },
    title: {
        fontWeight: 'bold',
        fontSize: 23,
        marginTop: 20,
        marginBottom: 5,
        alignSelf:"center", // 가운데 정렬
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 30,
        alignSelf:"center", // 가운데 정렬
    },
    homepageBoxPortrait: {
        width: 400,
        alignSelf: 'center',
        marginBottom: 20,
    },
    homepageItemPortrait:{
        minWidth: 400,
        maxWidth: 400,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homepageBoxLandscape: {
        marginHorizontal: 'auto',
        width: 800,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        marginBottom: 20,
    },
    homepageItemLandscape:{
        flex: 1,
        minWidth: 400,
        maxWidth: 400,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homepageButton: {
        // shadow style
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,

        width:360,
        height: 60,
        backgroundColor:"white",
        borderColor:"deeppink",
        borderRadius:8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    buttonBoxPortrait: {
        marginHorizontal: 'auto',
        width: 400,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        marginBottom: 100,
    },
    itemPortrait: {
        flex: 1,
        minWidth: 200,
        maxWidth: 200,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonBoxLandscape: {
        marginHorizontal: 'auto',
        width: 800,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        marginBottom: 100,
    },
    itemLandscape: {
        flex: 1,
        minWidth: 200,
        maxWidth: 200,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    courseButton: {
        // shadow style
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,

        width:160,
        height:60,
        borderRadius:8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    courseText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});

export default MainPage;