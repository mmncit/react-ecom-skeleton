import { useState } from "react";

export default function EffectBlog() {
  const [resourceType, setResourceType] = useState("posts");

  return (
    <>
      <div>
        <button
          onClick={() => {
            setResourceType("posts");
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResourceType("users");
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResourceType("comments");
          }}
        >
          Comments
        </button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}
