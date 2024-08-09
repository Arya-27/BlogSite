
import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div className="h-full w-full mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="mt-40 flex items-center justify-center p-2  w-full">
              <div>
              <h1 className='font-mono text-4xl font-bold hover:text-gray-400'>
                                Welcome to IdeaNest.
            </h1><br/>
              <h3 className="text-2xl font-bold p-16 hover:text-gray-500 ">
                Login to read any post or post one of your own!
            </h3>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
export default Home;