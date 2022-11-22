import { collection, doc, onSnapshot } from "firebase/firestore";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../configs/firebase.config";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const content = useRef(null);

  useEffect(() => {
    const blogRef = doc(collection(db, "blogs"), id);
    onSnapshot(blogRef, (res) => {
      setBlog({
        id: res.id,
        ...res.data(),
      });
    });
  }, [id]);
  useEffect(() => {
    content.current.textContent = "";
    content.current.insertAdjacentHTML("beforeend", blog?.content);
  }, [blog.content]);

  return (
    <div className="py-16">
      <div className="container">
        <h1 className="text-xl font-bold text-center py-7 sm:text-2xl md:text-3xl">
          {blog?.name}
        </h1>
      </div>
      <div className="overflow-hidden aspect-[4/2] w-[100vw] sm:aspect-[3/1] md:aspect-[4/1] mx-auto lg:max-w-[1440px]">
        {blog?.image && (
          <img src={blog.image} alt="" className="object-cover w-full h-full" />
        )}
      </div>
      <div className="max-w-4xl px-2 mx-auto mt-12" ref={content}></div>
    </div>
  );
};

export default Blog;
