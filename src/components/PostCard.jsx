import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  // Check if featuredImage is available before attempting to get preview
  const filePreview = featuredImage ? appwriteService.getFilePreview(featuredImage) : '';

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {featuredImage && <img src={filePreview} alt={title} className="rounded-xl" />}
        </div>
        <h2 className="text-lg font-mono">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;