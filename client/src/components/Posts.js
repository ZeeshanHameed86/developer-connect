import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/post_action";
import Spinner from "./Spinner";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const Posts = () => {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community
      </p>
      <PostForm />
      <div className="posts">
        {posts.map((post) => {
          return <PostItem key={post._id} post={post} />;
        })}
      </div>
    </>
  );
};

export default Posts;
