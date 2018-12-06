import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";
import Switch from "react-native-switch-pro";
import colors from "../../constants/colors";
import BellIcon from "../../shared/icons/BellIcon";
import BookmarkOutlineIcon from "../../shared/icons/BookmarkOutlineIcon";
import ChevronRightIcon from "../../shared/icons/ChevronRightIcon";
import EnterIcon from "../../shared/icons/EnterIcon";
import HelpIcon from "../../shared/icons/HelpIcon";
import MapPinIcon from "../../shared/icons/MapPinIcon";
import StyledButton from "../../shared/StyledButton";
import StyledText from "../../shared/StyledText";
import navigationService from "../../utils/navigationService";
import pluralize from "../../utils/pluralize";

const productsText = pluralize({
  "0": "нет продуктов",
  "1": "продукт",
  "2-4": "продукта",
  many: "продуктов"
});

class Profile extends React.Component {
  state = {
    acceptNotifications: false
  };

  render() {
    const { inFavoritesCount } = this.props;
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.header}>
          <StyledButton iconLeft transparent>
            <EnterIcon
              style={styles.enterIcon}
              width={24}
              height={24}
              fill={colors.primary}
            />
            <Text>Войти</Text>
          </StyledButton>
          <StyledText
            style={styles.subtitle}
            text="Войдите, чтобы синхронизировать свои данные на всех устройствах"
          />
        </View>
        <View style={styles.content}>
          <TouchableHighlight
            style={styles.touchableItem}
            underlayColor={colors.background}
          >
            <View style={styles.profileItem}>
              <View style={styles.profileItemWrapper}>
                <View style={styles.profileItemLeft}>
                  <BellIcon width={24} height={24} color={colors.black} />
                </View>
                <View style={styles.profileItemBody}>
                  <Text style={styles.profileItemTitle}>
                    Получать уведомления
                  </Text>
                </View>
                <View style={styles.profileItemRight}>
                  <Switch
                    onValueChange={this.toggleNotifications}
                    value={this.state.acceptNotifications}
                    backgroundActive={colors.primary}
                    width={50}
                    height={30}
                  />
                </View>
              </View>
            </View>
          </TouchableHighlight>
          <View style={styles.profileItemSeparator} />
          <TouchableHighlight
            style={styles.touchableItem}
            underlayColor={colors.background}
            onPress={this.navigateToScreen("Favorites")}
          >
            <View style={styles.profileItem}>
              <View style={styles.profileItemWrapper}>
                <View style={styles.profileItemLeft}>
                  <BookmarkOutlineIcon
                    width={24}
                    height={24}
                    color={colors.black}
                  />
                </View>
                <View style={styles.profileItemBody}>
                  <Text style={styles.profileItemTitle}>Избранное</Text>
                </View>
                <View style={styles.profileItemRight}>
                  <StyledText
                    style={styles.profileItemRightText}
                    text={
                      inFavoritesCount
                        ? inFavoritesCount +
                          " " +
                          productsText(inFavoritesCount)
                        : productsText(inFavoritesCount)
                    }
                  />
                  <ChevronRightIcon width={9} height={13} fill="#C8C7CC" />
                </View>
              </View>
            </View>
          </TouchableHighlight>
          <View style={styles.profileItemSeparator} />
          <TouchableHighlight
            style={styles.touchableItem}
            underlayColor={colors.background}
          >
            <View style={styles.profileItem}>
              <View style={styles.profileItemWrapper}>
                <View style={styles.profileItemLeft}>
                  <MapPinIcon width={24} height={24} color={colors.black} />
                </View>
                <View style={styles.profileItemBody}>
                  <Text style={styles.profileItemTitle}>Мои адреса</Text>
                </View>
                <View style={styles.profileItemRight}>
                  <ChevronRightIcon width={9} height={13} fill="#C8C7CC" />
                </View>
              </View>
            </View>
          </TouchableHighlight>
          <View style={styles.profileItemSeparator} />
          <TouchableHighlight
            style={styles.touchableItem}
            underlayColor={colors.background}
          >
            <View style={styles.profileItem}>
              <View style={styles.profileItemWrapper}>
                <View style={styles.profileItemLeft}>
                  <HelpIcon width={24} height={24} color={colors.black} />
                </View>
                <View style={styles.profileItemBody}>
                  <Text style={styles.profileItemTitle}>
                    Помощь и поддержка
                  </Text>
                </View>
                <View style={styles.profileItemRight}>
                  <ChevronRightIcon width={9} height={13} fill="#C8C7CC" />
                </View>
              </View>
            </View>
          </TouchableHighlight>
          <View style={styles.profileItemSeparator} />
        </View>
      </SafeAreaView>
    );
  }

  toggleNotifications = () => {
    this.setState({
      acceptNotifications: !this.state.acceptNotifications
    });
  };

  navigateToScreen = screenName => () => {
    navigationService.navigate(screenName);
  };
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  header: {
    alignItems: "flex-start",
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.hairlineBorder
  },
  enterIcon: {
    marginRight: 15
  },
  subtitle: {
    marginTop: 15,
    color: "#8A8A8F"
  },
  content: {
    paddingTop: 20,
    paddingBottom: 20
  },
  touchableItem: {
    backgroundColor: colors.white
  },
  profileItem: {
    height: 56
  },
  profileItemWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  profileItemLeft: {
    marginRight: 15
  },
  profileItemTitle: {
    fontSize: 17,
    lineHeight: 22,
    color: colors.black
  },
  profileItemBody: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  profileItemRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  profileItemRightText: {
    color: "#8F8E94",
    marginRight: 12
  },
  profileItemSeparator: {
    height: 1,
    marginLeft: 60,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#C8C7CC"
  }
});

Profile.navigationOptions = {
  header: null
};

export default Profile;
