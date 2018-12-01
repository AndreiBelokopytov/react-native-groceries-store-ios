import * as React from "react";
import { withMappedNavigationProps } from "react-navigation-props-mapper";
import TranslucentHeader from "../../shared/TranscluentHeader";

class ProductsHeader extends React.Component {
  render() {
    const { category, ...rest } = this.props;

    return <TranslucentHeader title={category.name} {...rest} />;
  }
}

export default withMappedNavigationProps()(ProductsHeader);
