import * as React from "react";
import { withMappedNavigationProps } from "react-navigation-props-mapper";
import TranslucentHeader from "../../shared/TranscluentHeader";
import { HeaderRight } from "./headerRight";

class ProductDetailsHeader extends React.Component {
  render() {
    return (
      <TranslucentHeader {...this.props} HeaderRightComponent={HeaderRight} />
    );
  }
}

export default withMappedNavigationProps()(ProductDetailsHeader);
