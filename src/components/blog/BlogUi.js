import { collection, query, limit, onSnapshot } from "firebase/firestore";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../configs/firebase.config";

const BlogItem = ({ blog }) => {
  const content = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    content.current.textContent = "";
    content.current.insertAdjacentHTML("beforeend", blog.content);
  }, [blog.content]);
  const handleNavigate = () => {
    navigate(`/blog/${blog.id}`);
  };
  return (
    <div className="flex flex-col duration-300 bg-white rounded shadow group hover:shadow-lg">
      <div
        className="flex-shrink-0 overflow-hidden cursor-pointer aspect-video"
        onClick={handleNavigate}
      >
        <img
          src={blog.image}
          alt=""
          className="object-cover w-full h-full duration-300 group-hover:scale-125"
        />
      </div>
      <div className="flex flex-col flex-1 px-5 py-4 border border-t-0 border-gray-300/30">
        <h3
          className="mt-3 mb-2 text-xl font-medium text-black capitalize cursor-pointer line-clamp-2"
          onClick={handleNavigate}
        >
          {blog.name}
        </h3>
        <span className="mb-6 text-gray-500 line-clamp-3" ref={content}></span>
        <div className="mt-auto">
          <button
            className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded cursor-pointer h-[60px] duration-300 hover:bg-blue-400"
            onClick={handleNavigate}
          >
            Xem blog
          </button>
        </div>
      </div>
    </div>
  );
};
export default function BlogList({ limitQuery = 3 }) {
  const blogRef = collection(db, "blogs");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (limitQuery !== 0) {
      const blogRef_ = query(blogRef, limit(limit));
      onSnapshot(blogRef_, (res) => {
        const docs = res.docs;
        let temp = [];
        docs?.length > 0 &&
          docs.map((doc) => temp.push({ id: doc.id, ...doc.data() }));
        setBlogs(temp);
      });
    } else {
      onSnapshot(blogRef, (res) => {
        const docs = res.docs;
        let temp = [];
        docs?.length > 0 &&
          docs.map((doc) => temp.push({ id: doc.id, ...doc.data() }));
        setBlogs(temp);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 gird-flow-row auto-rows-fr">
      {blogs?.length > 0 &&
        blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)}
    </div>
  );
}
