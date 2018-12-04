import React, { PureComponent } from "react";
import { Svg } from "expo";

class ChevronRightIcon extends PureComponent {
  render() {
    return (
      <Svg viewBox="0 0 9 13" {...this.props}>
        <Svg.Path d="M2.11307 0L0.838753 1.23157L6.28831 6.49999L0.838623 11.7684L2.11294 13L8.83862 6.49994L2.11307 0Z" />
      </Svg>
    );
  }
}

export default ChevronRightIcon;
