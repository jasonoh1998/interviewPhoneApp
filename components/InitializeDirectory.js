/* 파일관리 라이브러리 */
import * as FileSystem from 'expo-file-system';
import { getDownloadURL, ref} from "firebase/storage";
import {storage} from '../firebaseConfig.js'; // gets the storage location

export const initializeDirectory = (courseData) => {

    /* /DongYangInterviewPhone 존재하지 않을때 디렉토리 생성 */
    FileSystem.getInfoAsync(FileSystem.documentDirectory + '/DongYangInterviewPhone/')
            .then((directoryInfo) => {
            if (!directoryInfo.exists) {
                return FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + '/DongYangInterviewPhone/', { intermediates: true });
            }
            return Promise.resolve();
            });
    
    /*  */
    courseData.map(item => {
        const courseName = item.replace(/[ /-]/g,'');  // 공백, -, / 없게 파일저장
        FileSystem.getInfoAsync(FileSystem.documentDirectory + `/DongYangInterviewPhone/${courseName}.pdf`)
            .then((directoryInfo) => {
                if (!directoryInfo.exists) {
                    const pathReference = ref(storage, `/DongYangInterviewPhone/${courseName}.pdf`); // firebase 저장소 위치
                    const fileUri = FileSystem.documentDirectory + `/DongYangInterviewPhone/${courseName}.pdf`; // 파일 내부 정장소 위치
                    getDownloadURL(pathReference).then(url => {
                        FileSystem.downloadAsync( url, fileUri);
                    });
                }
            });
    });
};