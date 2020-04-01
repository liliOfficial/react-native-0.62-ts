# react-native-0.62-ts
This project is built with React Native 0.62 and typescript3.7.3.
Some of the features may not support by previous version.

Other important dependencies:
“react-navigation”: “^4.3.4",
“axios”: “^0.19.2",

How to Run the project:
1. git clone the project to local
2. npm install
2. cd ios, pod install, cd .. for ios Simulator
3. npx react-native run-ios

According to the current needs, this project have already meet the requirements. However, there are still features can be improved if the project grows larger.
1. State management: Currently using hooks. With the increase of page number, the prop method may not be enough. State management dependencies like Redux will be necessary.
2. Individual HTTP request service module: Currently, requests are only sent once and allocate in the screen component that they are being use. 
3. Global layer features such as popup, toaster, notification need to be added to improve the UX and de consitency of the project.
4. Error handling.
5. Unit test.
