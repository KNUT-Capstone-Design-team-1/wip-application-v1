import * as React from 'react';
import {SafeAreaView} from 'react-native';
import * as Components from '../components';
import {PillStoreStyles} from '../styles';

const {styles} = PillStoreStyles;

function PillStore(props) {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <Components.PillStoreComponents.Header style={styles.header} />

      {/* 저장된 알약 목록을 표시하기 위한 Flat List */}
      <Components.PillStoreComponents.PillList navigation={navigation} />

      {/* 내 주변 약국 화면 이동 버튼 */}
      <Components.PillStoreComponents.NearByPharmacyButton
        navigation={navigation}
        style={styles.opacity}
      />

      {/* 메인 화면 이동 버튼 */}
      <Components.PillStoreComponents.MainButton
        navigation={navigation}
        style={styles.opacity}
      />
    </SafeAreaView>
  );
}

export default PillStore;
