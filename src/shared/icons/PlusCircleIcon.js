import React, { PureComponent } from "react";
import { Svg } from "expo";

export default class PlusCircleIcon extends PureComponent {
  render() {
    return (
      <Svg viewBox="0 0 36 36" {...this.props}>
        <Svg.Path d="M19 12a1 1 0 1 0-2 0h2zm-2 12a1 1 0 1 0 2 0h-2zm-5-7a1 1 0 1 0 0 2v-2zm12 2a1 1 0 1 0 0-2v2zm8-1c0 7.732-6.268 14-14 14v2c8.837 0 16-7.163 16-16h-2zM18 32c-7.732 0-14-6.268-14-14H2c0 8.837 7.163 16 16 16v-2zM4 18c0-7.732 6.268-14 14-14V2C9.163 2 2 9.163 2 18h2zM18 4c7.732 0 14 6.268 14 14h2c0-8.837-7.163-16-16-16v2zm-1 8v12h2V12h-2zm-5 7h12v-2H12v2z" />
      </Svg>
    );
  }
}
