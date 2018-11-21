import React, { Component } from "react";
import {
  StyleSheet,
  Animated,
  Easing,
  InteractionManager,
  Dimensions
} from "react-native";

const animationConfig = {
  duration: 200,
  easing: Easing.in,
  useNativeDriver: true
};

export default class ModalDialog extends Component {
  static defaultProps = {
    height: 180,
    alert: false
  };

  static getDerivedStateFromProps(props, state) {
    if (props.visible && props.visible !== state.dialogIsVisible) {
      return {
        dialogIsVisible: props.visible
      };
    } else {
      return null;
    }
  }

  state = {
    dialogIsVisible: false
  };

  backgroundOpacity = new Animated.Value(0);
  dialogOpacity = new Animated.Value(0);
  dialogTransform = new Animated.Value(0);

  getBackgroundColor = () =>
    this.backgroundOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.2)"]
    });

  getDialogScaleFactor = () =>
    this.dialogTransform.interpolate({
      inputRange: [0, 1],
      outputRange: [1.3, 1]
    });

  getDialogTranslateY = () => {
    const { height } = this.props;
    const { height: screenHeight } = Dimensions.get("window");
    return this.dialogTransform.interpolate({
      inputRange: [0, 1],
      outputRange: [height, height / 2.0 - screenHeight / 2.0]
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.visible && this.props.visible !== prevProps.visible) {
      this.openDialog();
    } else if (
      !this.props.visible &&
      this.props.visible !== prevProps.visible
    ) {
      this.closeDialog();
    }
  }

  render() {
    if (!this.state.dialogIsVisible) {
      return null;
    }
    const { height, renderContent, alert } = this.props;
    const dialogTransform = alert
      ? [
          {
            scaleX: this.getDialogScaleFactor()
          },
          {
            scaleY: this.getDialogScaleFactor()
          }
        ]
      : [
          {
            translateY: this.getDialogTranslateY()
          }
        ];
    return (
      <Animated.View
        style={[
          styles.root,
          {
            justifyContent: alert ? "center" : "flex-end"
          },
          { backgroundColor: this.getBackgroundColor() }
        ]}
      >
        <Animated.View
          style={[
            {
              height
            },
            {
              transform: dialogTransform,
              opacity: this.dialogOpacity
            }
          ]}
        >
          {renderContent && renderContent()}
        </Animated.View>
      </Animated.View>
    );
  }

  openDialog = () => {
    Animated.parallel([
      Animated.timing(this.backgroundOpacity, {
        ...animationConfig,
        toValue: 1,
        useNativeDriver: false
      }).start(),
      Animated.timing(this.dialogOpacity, {
        ...animationConfig,
        toValue: 1
      }).start(),
      Animated.timing(this.dialogTransform, {
        ...animationConfig,
        toValue: 1
      }).start()
    ]);
  };

  closeDialog = () => {
    Animated.parallel([
      Animated.timing(this.backgroundOpacity, {
        ...animationConfig,
        toValue: 0,
        useNativeDriver: false
      }).start(),
      Animated.timing(this.dialogOpacity, {
        ...animationConfig,
        toValue: 0
      }).start(),
      Animated.timing(this.dialogTransform, {
        ...animationConfig,
        toValue: 0
      }).start()
    ]);

    InteractionManager.runAfterInteractions(() => {
      this.setState({
        dialogIsVisible: false
      });
    });
  };
}

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "stretch",
    paddingHorizontal: 20
  }
});
