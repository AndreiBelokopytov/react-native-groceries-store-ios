import React, { PureComponent } from "react";
import { Svg } from "expo";

export default class CheckmarkIcon extends PureComponent {
  render() {
    return (
      <Svg viewBox="0 0 24 24" {...this.props}>
        <Svg.Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z"
        />
      </Svg>
    );
  }
}
