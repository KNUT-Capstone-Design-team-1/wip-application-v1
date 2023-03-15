import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import RNExitApp from 'react-native-exit-app';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from 'react-native';
import moment from 'moment';
import {ConfigService} from '../services';

const Header = props => {
  const {style} = props;
  return (
    <SafeAreaView style={style}>
      <Text style={styles.headerText}>약관</Text>
    </SafeAreaView>
  );
};

const Terms = () => {
  return (
    <Text style={styles.text}>
      제 1조 목적{'\n'}
      1) 이 약관은 이게뭐약 팀 (이하 "개발자")가 운영하는 모바일 애플리케이션인
      이게뭐약 (이하 "애플리케이션")의 서비스 이용 및 제공에 관한 제반 사항의
      규정을 목적으로 합니다.{'\n\n'}제 2조 용어의 정의{'\n'}
      1) 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.{'\n'}- "서비스"라
      함은 모바일 기기를 통하여 "이용자"가 이용할 수 있는 "개발자"가 제공하는
      제반 서비스를 의미 합니다.{'\n'}- "이용자"란 "애플리케이션"에 접속하여 이
      약관에 동의하여 "애플리케이션"이 제공하는 서비스를 이용하는 자를 의미
      합니다.{'\n'}- "모바일 기기"란 콘텐츠를 다운로드 받거나 설치하여 사용할 수
      있는 기기로서, 휴대폰, 스마트폰, 태블릿 등을 의미 합니다.{'\n'}-
      "애플리케이션"이란 "개발자"가 제공하는 서비스를 이용하기 위해 "모바일
      기기"를 통해 다운로드 받거나 설치하여 사용하는 프로그램 일체를 의미
      합니다.{'\n\n'}제 3조 약관의 효력 및 변경{'\n'}
      1) 본 약관은 서비스 이용을 위한 애플리케이션 내에 본 약관을 명시하고,
      이용자가 애플리케이션을 설치 및 실행함과 동시에 효력이 발생합니다.{'\n'}
      2) 이용자는 본 약관에 동의하지 않으면 서비스를 이용할 수 없으며, 약관 동의
      여부는 애플리케이션 내 저장됩니다.{'\n'}
      3) 개발자는 불가피한 여건이나 사정이 있을 경우 「약관의 규제에 관한
      법률」, 「정보통신망이용촉진 및 정보보호 등에 관한 법률」등 관련 법령에
      위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.{'\n'}
      4) 개발자가 약관을 개정할 경우에는 적용 일자 및 개정 내용, 개정 사유 등을
      명시하여 최소한 그 적용일 7일 이전부터 애플리케이션 내 또는 그 연결 화면에
      게시하여 이용자에게 공지합니다.{'\n'}
      5) 개발자가 약관을 개정할 경우 개정 약관 공지 후 개정 약관의 적용에 대한
      이용자의 동의 여부를 확인 합니다. 개발자는 제 3항의 공지 또는 통지를 할
      경우 이용자가 개정 약관에 대해 동의 또는 거부의 의사표시를 하지 않으면
      동의한 것으로 볼 수 있다는 내용도 함께 공지 또는 통지를 하며, 이용자가 이
      약관 시행일 까지 거부의 의사표시를 하지 않는다면 개정 약관에 동의한 것으로
      볼 수 있습니다. 이용자가 개정 약관에 대해 동의하지 않는 경우 개발자 또는
      이용자는 서비스 이용 계약을 해지하고 서비스를 이용하지 않을 수 있습니다.
      {'\n\n'}제 4조 개인정보 활용 고지{'\n'}
      1) 서비스 이용 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집 될 수
      있습니다.{'\n'}- 이미지 검색: 검색 형식, 검색한 이미지 데이터, 검색 날짜
      {'\n'}- 식별 검색 및 상세 정보 검색: 검색 형식, 검색 날짜{'\n\n'}제 5조
      개인정보의 수집 방법{'\n'}
      1) 애플리케이션은 검색 지원 서비스로서, 검색 시 발생하는 데이터 (검색
      형식, 이미지 데이터, 검색 날짜)를 수집합니다.{'\n\n'}제 6조 수집한
      개인정보의 이용{'\n'}
      1) 애플리케이션은 수집 된 데이터를 검색 정확도 및 서비스 개선을 위해
      활용합니다.{'\n\n'}제 7조 이용자의 의무{'\n'}
      1) 이용자는 개발자가 제공하는 서비스의 이용과 관련하여 다음에 해당하는
      행위를 해서는 안 됩니다.{'\n'}- 개발자로부터 특별한 권리를 부여 받지 않고
      애플리케이션을 변경하거나, 애플리케이션에 다른 프로그램을 추가⋅삽입하거나,
      서버를 해킹⋅역설계 하거나, 소스 코드나 애플리케이션 데이터를 변경하거나,
      별도의 서버를 구축하거나, 애플리케이션의 일부분을 임의로 변경⋅도용하여
      개발자를 사칭하는 행위{'\n'}- 그 밖에 관련 법령에 위반되거나 선량한 풍속
      기타 사회 통념에 반하는 행위{'\n\n'}제 8조 책임의 한계 및 법적 고지{'\n'}
      1) 애플리케이션은 식의약 데이터 포털의 "완제 의약품 허가 상세 데이터"와
      "의약품 낱알식별정보 데이터"를 기반으로 검색 지원의 목적을 가진 정보를
      제공합니다.{'\n'}
      2) 애플리케이션은 정보의 정확성을 위해 노력하고 있으나, 정보의 정확성 및
      신뢰성, 적법성에 대해 어떠한 보증도 하지 않으며 편집 상의 오류, 허가 사항
      변경, 추가적인 학술 연구 또는 임상 연구 발표 등으로 인해 발생하는 문제에
      대해 개발자는 책임지지 않습니다.{'\n'}
      3) 개발자는 애플리케이션 내 정보를 수정할 의무를 지지 않으나 필요에 따라
      개선할 수 있습니다.{'\n'}
      4) 애플리케이션은 "검색 지원 서비스"로서 서비스 및 정보와 관련하여 직접,
      간접, 부수적, 징벌적, 파생적인 손해에 관해서 책임을 지지 않습니다.{'\n'}
      5) 개발자는 "구체적인 약의 정보 및 복용"에 대해 애플리케이션 이용 시
      이용자에게 "약사에게 확인할 것"을 고지하고 있으며, 이를 이용자가 확인하지
      않아 발생한 사고에 대해서는 개발자는 책임을 지지 않습니다.
    </Text>
  );
};

const TermsAgreeButton = props => {
  const {navigation} = props;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        const now = moment().format('YYYY-MM-DD HH:mm:ss');

        ConfigService.updateserviceAgree('agree');

        ToastAndroid.showWithGravity(
          `${now} 부로 서비스에 동의하였습니다.`,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );

        navigation.navigate('main');
      }}>
      <Text style={styles.buttonText}>동의</Text>
    </TouchableOpacity>
  );
};

const TermsDeclineButton = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        ToastAndroid.showWithGravity(
          '약관에 동의하지 않아 앱을 종료합니다.',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );

        setTimeout(() => {
          RNExitApp.exitApp();
        }, 500);
      }}>
      <Text style={styles.buttonText}>거부</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: RFValue(30, 720),
    fontWeight: 'bold',
    fontFamily: 'Jua-Regular',
  },
  text: {
    padding: '10%',
    fontSize: RFValue(15, 720),
    fontWeight: 'bold',
  },
  textHilight: {color: 'red'},
  button: {
    width: '45%',
    marginVertical: '5%',
    marginHorizontal: '1%',
    padding: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#81C147',
  },
  buttonText: {
    fontSize: RFValue(25, 720),
    fontFamily: 'Jua-Regular',
  },
});

export {Header, Terms, TermsAgreeButton, TermsDeclineButton};
