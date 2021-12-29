import React, { useState, useEffect } from "react";
import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ postId }) => {
  const [comments, setComments] = useState([]);
  console.log(comments);
  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const renderedComments = comments.map((comment) => {
    return <li key={comments.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
