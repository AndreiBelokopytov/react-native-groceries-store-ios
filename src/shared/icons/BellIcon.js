import React, { PureComponent } from "react";
import { Svg } from "expo";

class BellIcon extends PureComponent {
  render() {
    return (
      <Svg viewBox="0 0 24 24" {...this.props}>
        <Svg.Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3.5C10.4087 3.5 8.88258 4.13214 7.75736 5.25736C6.63214 6.38258 6 7.9087 6 9.5V14.5C6 15.2082 5.81218 15.8971 5.46411 16.5H18.5359C18.1878 15.8971 18 15.2082 18 14.5V9.5C18 7.9087 17.3679 6.38258 16.2426 5.25736C15.1174 4.13214 13.5913 3.5 12 3.5ZM22 16.5C21.4696 16.5 20.9609 16.2893 20.5858 15.9142C20.2107 15.5391 20 15.0304 20 14.5V9.5C20 7.37827 19.1571 5.34344 17.6569 3.84315C16.1566 2.34285 14.1217 1.5 12 1.5C9.87827 1.5 7.84344 2.34285 6.34315 3.84315C4.84285 5.34344 4 7.37827 4 9.5V14.5C4 15.0304 3.78929 15.5391 3.41421 15.9142C3.03914 16.2893 2.53043 16.5 2 16.5C1.44772 16.5 1 16.9477 1 17.5C1 18.0523 1.44772 18.5 2 18.5H22C22.5523 18.5 23 18.0523 23 17.5C23 16.9477 22.5523 16.5 22 16.5ZM9.76823 20.635C10.246 20.3579 10.8579 20.5205 11.135 20.9982C11.2229 21.1498 11.3491 21.2756 11.5009 21.363C11.6527 21.4504 11.8248 21.4965 12 21.4965C12.1752 21.4965 12.3473 21.4504 12.4991 21.363C12.6509 21.2756 12.7771 21.1498 12.865 20.9982C13.1421 20.5205 13.754 20.3579 14.2318 20.635C14.7095 20.9121 14.8721 21.524 14.595 22.0018C14.3313 22.4564 13.9528 22.8337 13.4973 23.0961C13.0419 23.3584 12.5256 23.4965 12 23.4965C11.4744 23.4965 10.9581 23.3584 10.5027 23.0961C10.0472 22.8337 9.66872 22.4564 9.405 22.0018C9.12788 21.524 9.2905 20.9121 9.76823 20.635Z"
        />
      </Svg>
    );
  }
}

export default BellIcon;
