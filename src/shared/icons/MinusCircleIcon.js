import React, { PureComponent } from "react";
import { Svg } from "expo";

export default class MinusCircleIcon extends PureComponent {
  render() {
    return (
      <Svg viewBox="0 0 36 36" {...this.props}>
        <Svg.Path
          d="M12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19V17ZM24 19C24.5523 19 25 18.5523 25 18C25 17.4477 24.5523 17 24 17V19ZM32 18C32 25.732 25.732 32 18 32V34C26.8366 34 34 26.8366 34 18H32ZM18 32C10.268 32 4 25.732 4 18H2C2 26.8366 9.16344 34 18 34V32ZM4 18C4 10.268 10.268 4 18 4V2C9.16344 2 2 9.16344 2 18H4ZM18 4C25.732 4 32 10.268 32 18H34C34 9.16344 26.8366 2 18 2V4ZM12 19H24V17H12V19Z"
          fill="black"
        />
      </Svg>
    );
  }
}
