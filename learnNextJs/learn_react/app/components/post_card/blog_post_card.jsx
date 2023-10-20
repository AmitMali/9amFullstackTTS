"use client";
import Link from "next/link";
const BlogPostCard = (props) => {
  const { post } = props;
  return (
    <div>
      <article
        key={post.id}
        className="flex max-w-xl flex-col items-start justify-between"
      >
        <div className="flex items-center gap-x-4 text-xs">
          {/* <time dateTime= className="text-gray-500">
  
        </time> */}
          <Link
            href="#"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          ></Link>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={`blog/${post.id}`}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.body}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src="" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <Link href="#">
                <span className="absolute inset-0" />
              </Link>
            </p>
            <p className="text-gray-600"></p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostCard;
