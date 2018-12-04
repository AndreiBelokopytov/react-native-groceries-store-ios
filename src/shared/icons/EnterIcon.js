import React, { PureComponent } from "react";
import { Svg } from "expo";

class CloseIcon extends PureComponent {
  render() {
    return (
      <Svg viewBox="0 0 24 24" {...this.props}>
        <Svg.Rect width="24" height="24" fill="white" />
        <Svg.Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 3C2.44772 3 2 3.44772 2 4V7.98275L3 7.98276L4 7.98275V5H20V19H4V15.9999L3 16L2 15.9999V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3H3Z"
        />
        <Svg.Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 16L17 12L13 8V11H2V13H13V16Z"
        />
      </Svg>
    );
  }
}

export default CloseIcon;
