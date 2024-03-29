import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {Text} from 'react-native';
import requestPermission from './src/loader/loader';
import SplashScreen from 'react-native-splash-screen';
import NaviContainer from './src/navigation';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

export default function App() {
  useEffect(() => {
    // 앱 로딩 후 스플레시 화면
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  });

  // 권한 취득
  requestPermission();

  return <NaviContainer />;
}
