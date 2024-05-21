import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts when component mounts
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []); // Dependency array ensures useEffect runs only once on mount

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {/* Map through posts and render PostCard component for each */}
          {posts.map((post) => (
            <div
              key={post.$id}
              className="p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
