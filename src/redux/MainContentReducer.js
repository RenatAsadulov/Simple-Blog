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
      return { ...state, posts: [...state.posts, ...action.posts] };
    }

    default: {
      return state;
    }
  }
};

export const setPostsAC = (posts) => ({ type: "SET_USERS", posts });

export default mainContentReducer;
