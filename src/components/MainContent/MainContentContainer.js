import { connect } from "react-redux";
import { MainContent } from "./MainContent";
import { setPostsAС } from "../../redux/MainContentReducer";

const mapStateToProps = (state) => ({
  posts: state.mainContent.posts,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setPosts: (posts) => {
      dispatch(setPostsAС(posts));
    },
  };
};

const MainContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent);

export default MainContentContainer;
