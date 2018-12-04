import { connect } from "react-redux";
import Profile from "./Profile";

const mapStateToProps = state => {
  return {
    inFavoritesCount: state.profile.favorites.size
  };
};

export default connect(mapStateToProps)(Profile);
