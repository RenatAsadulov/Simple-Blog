import { connect } from "react-redux";
import { MainContent } from "./MainContent";
import { setPostsAC } from "../../redux/MainContentReducer";

const mapStateToProps = (state) => ({
  posts: state.mainContent.posts,
  commentText: state.mainContent.commentText,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setPosts: (posts) => {
      dispatch(setPostsAC(posts));
    },
  };
};

const MainContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent);

export default MainContentContainer;
