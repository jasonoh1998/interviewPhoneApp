import React from 'react';
import { StyleSheet, View} from 'react-native';
import * as FileSystem from 'expo-file-system';
import { PinchGestureHandler } from 'react-native-gesture-handler';
import PDFReader from 'rn-pdf-reader-js';
import { StatusBar } from 'expo-status-bar';


const CoursePage = ({navigate, route}) => {
  const courseName = route.params.item.replace(/[ /-]/g,'');  // 공백, -, / 없게 파일저장
  const fileUri = FileSystem.documentDirectory + `/DongYangInterviewPhone/${courseName}.pdf`; // 눌른 버튼의 파일이름 pdf를 연다

  return (
    <>
      <StatusBar hidden/>
      <PinchGestureHandler>
        <PDFReader
          style={View['style']}
          customStyle={customStyles}
          withPinchZoom
          withScroll
          source={{ uri: fileUri}}
        />
      </PinchGestureHandler>
    </>
  );
};

const customStyles = StyleSheet.create({
  readerContainerZoomContainer: {
    borderRadius: 8, // buttton radius
    // backgroundColor: 'transparent', // button background color
    // color:'white' // button color
    opacity: 0.6
  },
});

export default CoursePage;