let initialState = {
  posts: [],
};

const mainContentReducer = (state = initialState, action) => {
  let counter = 100;
  let comments = [];
  switch (action.type) {
    case "SET_USERS": {
      action.posts.map((post) => {
        return (post.postID = counter++);
      });
      action.posts.map((post) => {
        return (post.comments = comments);
      });
      action.posts.map((post) => {
        return (post.newCommentText = "qwe");
      });
      return { ...state, posts: [...state.posts, ...action.posts] };
    }
    case "UPDATE_COMMENT_TEXT": {
      let stateCopy = { ...state };
      stateCopy.newCommentText = action.newCommentText;
      return stateCopy;
    }
    case "ADD_COMMENT": {
      let newComments = action.posts.comments;
      newComments.push(action.comment);
      return { ...state, ...action.posts };
    }

    default: {
      return state;
    }
  }
};

export const setPostsAC = (posts) => ({ type: "SET_USERS", posts });

export const updateNewCommentTextAC = (newCommentText) => ({
  type: "UPDATE_COMMENT_TEXT",
  newCommentText: newCommentText,
});

export const addCommentAC = (comment) => ({
  type: "ADD_COMMENT",
  comment: comment,
});

export default mainContentReducer;
