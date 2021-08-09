import axios from "axios";
import { setAlert } from "./alert_action";
import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from "./types";

// Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");
    console.log(res);

    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Add like
export const addLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${postId}`);
    console.log(res.data);

    dispatch({ type: UPDATE_LIKES, payload: { postId, likes: res.data } });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Remove like
export const removeLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${postId}`);
    console.log(res.data);

    dispatch({ type: UPDATE_LIKES, payload: { postId, likes: res.data } });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {},
    });
  }
};