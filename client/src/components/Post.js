import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "./Spinner";
import { getPost } from "../actions/post_action";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import PostItem from "./PostItem";
import { useParams, Link } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { post, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(id));
  }, [getPost]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <>
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className="comment">
        {post.comments.map((comment) => {
          return (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={post._id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Post;
