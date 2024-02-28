import { Reducer } from "react";

const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_POST":
      const newPost = action.payload.post;
      return { posts: [newPost, ...state.posts] };
    case "DELETE_POST":
      let deletingId = action.payload.delId;
      let newPosts = state.posts.filter((post) => post.id !== deletingId);
      return { posts: newPosts };
      return state;
  }
};

export default postReducer;
