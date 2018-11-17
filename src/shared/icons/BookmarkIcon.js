import React, { PureComponent } from "react";
import { Svg } from "expo";

class BookmarkIcon extends PureComponent {
  render() {
    return (
      <Svg viewBox="0 0 24 24" {...this.props}>
        <Svg.Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2H17C17.7956 2 18.5587 2.31607 19.1213 2.87868C19.6839 3.44129 20 4.20435 20 5V21C20 21.3746 19.7907 21.7178 19.4576 21.8892C19.1245 22.0606 18.7236 22.0315 18.4188 21.8137L12 17.2289L5.58124 21.8137C5.27642 22.0315 4.87549 22.0606 4.54242 21.8892C4.20935 21.7178 4 21.3746 4 21V5C4 4.20435 4.31607 3.44129 4.87868 2.87868Z"
        />
      </Svg>
    );
  }
}

export default BookmarkIcon;
