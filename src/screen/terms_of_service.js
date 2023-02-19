import * as React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {TermsOfServiceStyles} from '../styles';
import {TermsOfServiceComponents} from '../components';

const {styles} = TermsOfServiceStyles;

function TermsOfService(props) {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <TermsOfServiceComponents.Header style={styles.header} />

      {/* 경고 문구 */}
      <ScrollView styles={styles.scrollView}>
        <TermsOfServiceComponents.misuseText />
      </ScrollView>

      {/* 동의 및 거부 버튼 */}
      <SafeAreaView style={styles.buttonContainer}>
        <TermsOfServiceComponents.serviceAgreeButton navigation={navigation} />
        <TermsOfServiceComponents.misUseDeclineButton />
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default TermsOfService;
