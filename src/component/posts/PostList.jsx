import { useState } from "react";
import PostItem from "./PostItem";
import PaginationComponent from "../Pagination";
import { fetchPosts } from "../Hooks/fetchPosts";
import { fetchUsers } from "../Hooks/fetchUsers";

function PostList() {
  const [page, setPage] = useState(1);
  let fullData = [];
  let dummyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let skeletonElement = dummyArr.map((el, i) => <PostItem key={i} loading />);

  // calling Custom Hooks to fetch users & posts
  let posts = fetchPosts(page);
  let users = fetchUsers(posts);

  // pagination handler
  const handleChange = (event, value) => {
    setPage(value);
  };

  // show skeleton component if data still loading
  if (posts === "loading" || users === "loading") {
    return skeletonElement;
  }
  //errorHandling
  if (posts === "error" || users === "error") {
    return <h2>Couldn`t fetch data</h2>;
  }

  // put all data into array after fetching
  if (
    typeof posts === "object" &&
    users[0] !== undefined &&
    users !== "loading"
  ) {
    posts.forEach((post) => {
      users.forEach((user) => {
        if (user.id === post.userId) {
          fullData.push({
            id: post.id,
            title: post.title,
            userName: user.name,
            phone: user.phone,
            loading: user.loading,
          });
        }
      });
    });
  }

  // show data after fetching
  let postElement;
  if (fullData.length) {
    postElement = fullData.map((post) => (
      <PostItem
        key={post.id}
        id={post.id}
        title={post.title}
        userName={post.userName}
        phone={post.phone}
      />
    ));
    return (
      <div className="user-list m-auto flex justify-center mb-32">
        <div className="container flex flex-col items-center gap-16 w-3/4 ">
          {postElement}
          <PaginationComponent page={page} handleChange={handleChange} />
        </div>
      </div>
    );
  }
}
export default PostList;
