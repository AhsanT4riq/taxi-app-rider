import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { View, Platform, Dimensions, Image, Linking } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { ImagePicker } from 'expo';
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Item,
  Title,
  Left,
  Right,
  Spinner,
  Body,
  List,
  ListItem
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { fetchTripHistoryAsync } from '../../../actions/rider/history';
import styles from './styles';
import commonColor from '../../../../native-base-theme/variables/commonColor';
import sisterhood from '../../../../assets/images/charity_logos/sisterhood-logo.png';
const { width, height } = Dimensions.get('window');

function mapStateToProps(state) {
  return {
    jwtAccessToken: state.rider.appState.jwtAccessToken,
    trips: state.rider.history.trips,
    loadSpinner: state.rider.history.loadSpinner
  };
}

class Charities extends Component {
  static propTypes = {
    jwtAccessToken: PropTypes.string,
    trips: PropTypes.array,
    fetchTripHistoryAsync: PropTypes.func,
    loadSpinner: PropTypes.bool
  };

  async componentDidMount() {
    await this.props.fetchTripHistoryAsync(this.props.jwtAccessToken);
  }

  render() {
    return (
      <Container
        style={{
          backgroundColor: '#fff'
        }}
      >
        <Header
          androidStatusBarColor={commonColor.statusBarLight}
          style={Platform.OS === 'ios' ? styles.iosHeader : styles.aHeader}
        >
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon
                name="md-arrow-back"
                style={{ fontSize: 28, color: commonColor.brandPrimary }}
              />
            </Button>
          </Left>
          <Body>
            <Title
              style={
                Platform.OS === 'ios'
                  ? styles.iosHeaderTitle
                  : styles.aHeaderTitle
              }
            >
              Charities
            </Title>
          </Body>
          <Right />
        </Header>
        <Content
          style={{
            backgroundColor: '#FCC7E5',
            borderWidth: 2,
            borderColor: '#c9639b',
            borderRadius: 2
          }}
        >
          <View style={{ padding: 15 }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#c9639b',
                fontWeight: 'bold',
                fontSize: 25
              }}
            >
              <Icon
                name="md-heart"
                style={{
                  color: '#c9639b',
                  marginLeft: 30,
                  fontWeight: '600',
                  marginTop: 2,
                  fontSize: 25,
                  opacity: 0.8,
                  width: 25
                }}
              />{' '}
              SheSafe Charities{' '}
              <Icon
                name="md-heart"
                style={{
                  color: '#c9639b',
                  marginLeft: 30,
                  fontWeight: '600',
                  marginTop: 2,
                  fontSize: 25,
                  opacity: 0.8,
                  width: 25
                }}
              />
              {'\n'}
            </Text>
            <Text
              style={{ textAlign: 'center', fontSize: 20, fontStyle: 'italic' }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>SheSafe</Text>{' '}
              Proudly Supports these {'\n'} 4 Charities by contributing {'\n'} a
              percentage of every fare.
            </Text>
          </View>
          <Card>
            <CardItem
              cardBody
              style={{
                backgroundColor: '#FCC7E5',
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <Image
                source={require('../../../../assets/images/charity_logos/bcna-logo.png')}
              />
            </CardItem>
            <CardItem style={{ backgroundColor: '#c9639b' }}>
              <Body style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                  onPress={() => {
                    Linking.openURL('https://www.bcna.org.au');
                  }}
                >
                  <Text>Go to Website</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem
              cardBody
              style={{
                backgroundColor: '#FCC7E5',
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <Image
                source={require('../../../../assets/images/charity_logos/sisterhood-logo.png')}
              />
            </CardItem>
            <CardItem style={{ backgroundColor: '#c9639b' }}>
              <Body style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                  onPress={() => {
                    Linking.openURL(
                      'http://www.thesisterhoodsocietyaustralia.com'
                    );
                  }}
                >
                  <Text>Go to Website</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem
              cardBody
              style={{
                backgroundColor: '#FCC7E5',
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <Image
                source={require('../../../../assets/images/charity_logos/emerge_rgb.png')}
              />
            </CardItem>
            <CardItem style={{ backgroundColor: '#c9639b' }}>
              <Body style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                  onPress={() => {
                    Linking.openURL('http://www.emergesupport.org.au');
                  }}
                >
                  <Text>Go to Website</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem
              cardBody
              style={{
                backgroundColor: '#FCC7E5',
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <Image
                source={require('../../../../assets/images/charity_logos/vsk.png')}
              />
            </CardItem>
            <CardItem style={{ backgroundColor: '#c9639b' }}>
              <Body style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                  onPress={() => {
                    Linking.openURL('http://www.vsk.org.au');
                  }}
                >
                  <Text>Go to Website</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <View style={{ padding: 15 }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#c9639b',
                fontWeight: 'bold',
                fontSize: 20,
                fontStyle: 'italic'
              }}
            >
              "SheSafe is proud to be{'\n'}making a real difference."{'\n'}We
              care about our community.
              <Icon
                name="md-heart"
                style={{
                  color: '#c9639b',
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
        </Content>
      </Container>
    );
  }
}

// export default Earnings;

function bindActions(dispatch) {
  return {
    fetchTripHistoryAsync: jwtAccessToken =>
      dispatch(fetchTripHistoryAsync(jwtAccessToken))
  };
}

export default connect(mapStateToProps, bindActions)(Charities);
