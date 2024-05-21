import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link
      to={`/post/${$id}`}
      className="block w-full rounded-xl overflow-hidden shadow-md border border-gray-200 hover:border-gray-300 transition-all duration-200"
    >
      <div className="relative">
        {/* Post image */}
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="w-full h-48 object-cover object-center"
        />
        {/* Image overlay */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      {/* Post title */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
