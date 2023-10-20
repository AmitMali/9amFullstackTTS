"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlogPostCard from "../components/post_card/blog_post_card";

export default function page() {
  const [posts, setPosts] = useState();

  const getPosts = async () => {
    const resp = await axios("https://jsonplaceholder.typicode.com/posts");
    setPosts(await resp.data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts &&
            posts.map((post) => {
              return <BlogPostCard post={post} />;
            })}
        </div>
      </div>
    </div>
  );
}
