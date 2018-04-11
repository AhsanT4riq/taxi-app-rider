import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Platform,
  StatusBar,
  Dimensions,
  ImageBackground
} from 'react-native';
import {
  Content,
  Text,
  Button,
  Icon,
  Spinner,
  Thumbnail,
  Grid,
  Col
} from 'native-base';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

import Register from '../register/';
import SignIn from '../signIn/';
import { setActiveLogin } from '../../../actions/common/entrypage';
import commonColor from '../../../../native-base-theme/variables/commonColor';
import ModalView from '../ModalView';

import styles from './styles';
const deviceHeight = Dimensions.get('window').height;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  static propTypes = {
    setActiveLogin: PropTypes.func
  };
  state = {
    activeLogin: null
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.activeLogin !== null) {
      this.setState({
        activeLogin: nextProps.activeLogin
      });
    } else if (nextProps.activeLogin === null) {
      this.setState({
        activeLogin: null
      });
    }
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 600);
  }
  render() {
    const resizeMode = 'center';
    if (this.state.activeLogin === 'signin') {
      return <SignIn />;
    }
    if (this.state.activeLogin === 'register') {
      return <Register />;
    }

    if (this.state.loading) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Spinner />
        </View>
      );
    } else {
      if (Object.keys(this.props.appConfig).length === 0) {
        return (
          <ModalView>
            <Text>No App Configuration Data</Text>
          </ModalView>
        );
      } else {
        return (
          <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <ImageBackground
              source={require('../../../../assets/images/splash.jpg')}
              style={{
                backgroundColor: '#ccc',
                flex: 1,
                resizeMode,
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center'
              }}
            >
              <Content
              // style={{ backgroundColor: commonColor.brandPrimary }}
              >
                <View
                  style={
                    Platform.OS === 'ios'
                      ? styles.iosLogoContainer
                      : styles.aLogoContainer
                  }
                >
                  {/* <Thumbnail
                    source={require('../../../../assets/images/taxi-cap1.png')}
                    style={styles.logoIcon}
                  /> */}
                  <Text style={styles.logoText}>SheSafe Rider{'\n'}</Text>

                  <Text
                    style={{
                      color: '#ff1495',
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                      alignSelf: 'center',
                      fontSize: 20
                    }}
                  >
                    "We care about the safety{'\n'}
                    {'  '}of you and your Family."{' '}
                    <Icon
                      name="md-heart"
                      style={{
                        color: '#ff1495',
                        marginLeft: 30,
                        fontWeight: '600',
                        marginTop: 2,
                        fontSize: 25,
                        opacity: 0.8,
                        width: 25
                      }}
                    />
                  </Text>
                </View>
                <View
                  style={
                    Platform.OS === 'ios'
                      ? { top: deviceHeight / 1.6, padding: 10 }
                      : { padding: 10 }
                  }
                >
                  <Button
                    rounded
                    onPress={() => Actions.signIn()}
                    transparent
                    block
                    style={styles.loginBtn}
                  >
                    <Text style={{ fontWeight: '600', color: '#fff' }}>
                      Sign In
                    </Text>
                  </Button>
                  <Button
                    rounded
                    onPress={() => Actions.register()}
                    block
                    style={styles.registerBtn}
                  >
                    <Text style={{ fontWeight: '600', color: '#fff' }}>
                      Register
                    </Text>
                  </Button>
                </View>
              </Content>
            </ImageBackground>
          </View>
        );
      }
    }
  }
}

function mapStateToProps(state) {
  return {
    activeLogin: state.entrypage.active,
    appConfig: state.basicAppConfig.config
  };
}

function bindActions(dispatch) {
  return {
    setActiveLogin: page => dispatch(setActiveLogin(page))
  };
}

export default connect(mapStateToProps, bindActions)(Login);
