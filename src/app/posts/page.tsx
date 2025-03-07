import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";
import PostsTable from "@/components/posts/PostsTable";

const PostPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/"></BackButton>
      <PostsTable></PostsTable>
      <PostsPagination></PostsPagination>
    </>
  );
};

export default PostPage;
