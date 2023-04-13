# Interview Phone App

This app was built to use it in places like academy or sales business where you can show case pdf or images to customers. The expo framework was used with firebase database.
Expo was chosen because of its simplicity and ease of use, which enables rapid development and deployment of cross-platform applications. Additionally, Expo offers a wide range of pre-built components, reducing the need for custom development and ensuring a consistent look and feel across different platforms.

Firebase was chosen for this app due to its ability to provide a scalable and easy-to-use backend service. This aspect was crucial as the business owner with no programming experience managing this wanted to effortlessly store and synchronize data across various devices.

Overall UI is built for tablet, but it works well with phones as well.

## Preview

### Phone

![makephotogallery net_1681408825228](https://user-images.githubusercontent.com/92873161/231845081-84b1bae0-6004-40e8-af7e-8e8206edb7a7.png)

### Tablet


## Installation

Use yarn to download dependencies to not handle errors.

```bash
yarn install
```

1. Fill out firebaseConfig_example.js and change it to firebaseConfig.js

2. Install expo-cli and set the bin to environment variable

3. Download expo go from app store and run expo start

If you want to make it into either apk, aab, or ios, run eas build.
